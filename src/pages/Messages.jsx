import React from "react";

const Messages = ({ contract }) => {
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   const getMessages = async () => {
  //     const response = await contract.getMemos();
  //     setMessages(response);
  //   };
  //   contract && getMessages();
  // }, [contract]);
  return (
    <div>
      <h3>Messages</h3>
    </div>
    // <div className="messages">
    //   <p className="messages_text">Messages</p>
    //   <Table striped bordered hover size="sm" className="messages_table">
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Message</th>
    //         <th>Timestamp</th>
    //         <th>Address</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {messages.length > 0 &&
    //         messages.map((message) => {
    //           return (
    //             <tr>
    //               <td>{message.name}</td>
    //               <td>{message.message}</td>
    //               <td>{message.timestamp.toString()}</td>
    //               <td>{message.from}</td>
    //             </tr>
    //           );
    //         })}
    //     </tbody>
    //   </Table>
    // </div>
  );
};

export default Messages;
