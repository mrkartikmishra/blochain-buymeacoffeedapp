import React from "react";
import { useEffect } from "react";
import Identicon from "react-identicons";
import { GrStatusWarning } from "react-icons/gr";
import { getDonations, isWalletConnected } from "../utils/utils";
import { useGlobalState } from "../statemanagement";
import { useState } from "react";
import Loader from "../components/Loader";

const Donations = () => {
  const [loading, setLoading] = useState(false);
  const [currentAccount] = useGlobalState("currentAccount");
  const [donations] = useGlobalState("donations");

  const { ethereum } = window;

  useEffect(() => {
    async function isConnected() {
      await isWalletConnected();
    }
    isConnected();
  }, []);

  useEffect(() => {
    async function getDonationsList() {
      setLoading(true);
      await getDonations();
      setLoading(false);
    }
    if (currentAccount) getDonationsList();
  }, [currentAccount]);

  if (!window.ethereum) {
    return (
      <div className="text-center bg-orange-400 p-4 rounded-md">
        <div className="flex items-center justify-center gap-2">
          <GrStatusWarning size={40} />
          <h3 className="font-poppins text-lg text-white">
            Metamask not detected. Please install and continue using this
            appliaction!!
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 min-h-screen">
      <div className="mb-2">
        <h3 className="font-poppins font-bold tracking-widest uppercase">
          Donations
        </h3>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen overflow-y-auto">
          <table className="w-full text-sm text-left text-blue-100">
            <thead className="text-xs text-white uppercase bg-orange-400 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Message
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {donations?.map((donation) => {
                return (
                  <tr className="bg-gray-200 text-black border-b border-gray-300 hover:scale-y-110">
                    <td className="px-6 py-4 text-center">{donation?.name}</td>
                    <td className="px-6 py-4 text-center">
                      {donation?.message}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {donation?.timestamp}
                    </td>
                    <td className="py-4 text-center flex justify-center items-center gap-3">
                      <Identicon
                        className="inline"
                        string={donation?.donar}
                        size={15}
                      />
                      <span>{donation?.donar}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Donations;
