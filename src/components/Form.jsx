import React from "react";
import { FaEthereum } from "react-icons/fa";
import { setGlobalState, useGlobalState } from "../statemanagement";
// import { ethers } from "ethers";

const Form = ({ contract }) => {
  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");

  const [buy] = useGlobalState("buy");

  // const buy = async (event) => {
  //   event.preventDefault();
  //   const amount = { value: ethers.utils.parseEther("0.001") };
  //   const transaction = await contract.buy(name, message, amount);
  //   await transaction.wait();
  //   console.log("Transaction has been completed!!!");
  //   setName("");
  //   setMessage("");
  // };

  const onCloseFormModalHandler = () => {
    setGlobalState("buy", "scale-0");
  };

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-slate-600 bg-opacity-40 transform transition-transform duration-300 ${buy}`}
    >
      <div className="bg-gray-100 m-2 sm:h-2/5 md:h-2/4 sm:w-2/5 md:w-2/4 p-4 shadow-[0_10px_20px_#cccccc] rounded-lg relative">
        <span
          onClick={onCloseFormModalHandler}
          className="absolute top-2 right-5 cursor-pointer text-lg font-bold"
        >
          X
        </span>
        <div className="flex items-center justify-center gap-4">
          <FaEthereum size={150} className="text-orange-500" />
          <div className="flex flex-col items-start justify-center gap-3 w-full">
            <h2 className="font-poppins uppercase tracking-widest text-md font-semibold">
              Pay with <span className="font-bold text-orange-500">0.01</span>{" "}
              ETH
            </h2>
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-transparent border-2 p-1 border-slate-400 focus:outline-none rounded-md w-full"
            />
            <textarea
              placeholder="Enter message"
              className="bg-transparent border-2 p-1 border-slate-400 focus:outline-none rounded-md w-full"
            ></textarea>
            <button className="px-6 md:px-6 bg-orange-500 py-[4px] w-full sm:w-1/2 rounded-md text-white font-poppins hover:bg-orange-600">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className='buy'>
    //     <Form onSubmit={buy}>
    //         <Form.Group className="mb-3" controlId="name">
    //             <Form.Label>Name</Form.Label>
    //             <Form.Control
    //                 type="text"
    //                 placeholder="Enter name"
    //                 value={name}
    //                 onChange={(event) => setName(event.target.value)}
    //             />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="message">
    //             <Form.Label>Message</Form.Label>
    //             <Form.Control
    //                 type="text"
    //                 placeholder="Enter message"
    //                 value={message}
    //                 onChange={(event) => setMessage(event.target.value)}
    //             />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //             Buy
    //         </Button>
    //     </Form>
    // </div>
  );
};

export default Form;
