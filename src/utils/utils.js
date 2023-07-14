import { ethers } from "ethers";

import { getGlobalState, setGlobalState } from "../statemanagement";

import { CONTRACT_ADDRESS } from "../artifacts/contractAddress.js";
import contractABI from "../artifacts/BuyMeCoffee.json";

const { ethereum } = window;

export const connectWallet = async () => {
  try {
    if (!ethereum)
      alert(
        "Metamask not detected. Please install and continue using this application!!"
      );

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("currentAccount", accounts[0]);
  } catch (error) {
    console.log("ERROR connecting wallet::", error);
  }
};

export const isWalletConnected = async () => {
  try {
    if (!ethereum) {
      alert(
        "Metamask not detected. Please install and continue using this appliaction!!"
      );
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts[0]) setGlobalState("currentAccount", accounts[0]);

    ethereum.on("chainChanged", (chainId) => {
      console.log("Netword changed::", chainId);
      window.location.reload();
    });

    ethereum.on("accountsChanged", async () => {
      setGlobalState("currentAccount", accounts[0]);
      await isWalletConnected();
    });
    if (accounts[0]) {
      setGlobalState("currentAccount", accounts[0]);
    } else {
      setGlobalState("currentAccount", "");
      console.log("Not Connected:: Please connect with Wallet");
    }
  } catch (error) {
    console.log("ERROR in IsWalletConnected::", error);
  }
};

export const getDonations = async () => {
  if (!ethereum) {
    alert(
      "Metamask not detected. Please install and continue using this appliaction!!"
    );
  }

  const contract = await getEthereumContract();
  const donations = await contract.getMemos();

  setGlobalState("donations", structureDonationsData(donations));
};

const structureDonationsData = (donations) => {
  return donations?.map((donation) => {
    return {
      name: donation.name,
      message: donation.message,
      donar: donation.from,
      timestamp: new Date(donation.timestamp.toNumber()).getTime(),
    };
  });
};

export const getEthereumContract = () => {
  const currentAccount = getGlobalState("currentAccount");

  if (currentAccount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractABI.abi,
      signer
    );

    return contract;
  } else {
    return getGlobalState("contract");
  }
};

export const truncateAddress = (address) => {
  return (
    address.slice(0, 5) +
    "..." +
    address.slice(address.length - 5, address.length)
  );
};
