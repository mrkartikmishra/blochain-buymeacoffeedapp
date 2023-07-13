import React from "react";
// import { ethers } from "ethers";

const Form = ({ contract }) => {
  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");

  // const buy = async (event) => {
  //   event.preventDefault();
  //   const amount = { value: ethers.utils.parseEther("0.001") };
  //   const transaction = await contract.buy(name, message, amount);
  //   await transaction.wait();
  //   console.log("Transaction has been completed!!!");
  //   setName("");
  //   setMessage("");
  // };

  return (
    <div>Form</div>
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
