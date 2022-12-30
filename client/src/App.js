import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import ABI from './abi/BuyMeCoffee.json';
import './App.css';
import Header from './components/header/header';
import Buy from './components/buy/buy';
import Messages from './components/messages/messages';

const App = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
      const contractAbi = ABI.abi;

      try {
        const { ethereum } = window;
        if (ethereum) {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        setProvider(provider);
        setSigner(signer);
        setContract(contract);

      } catch (err) {
        console.log(err);
      }
    }
    connectWallet();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='App_connection'>
        {/* <span>Metamask Not Connected</span> */}
        <span>Connected::0x80Ef335636B4CAece7daa1bBC849A8177C263E24</span>
      </div>
      <div className='App_main'>
        <Buy />
        <Messages />
      </div>
    </div>
  );
}

export default App;
