import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { isWalletConnected } from "./utils/utils";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Donations from "./pages/Donations";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    async function isConnected() {
      await isWalletConnected();
    }
    isConnected();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
