import { AlertCircle, LogIn, Shield, Zap } from "lucide-react";
import React from "react";
import { useToast } from "../toast/ToastService"; // Use your custom toast hook
import ApiAddProduct from "../components/ApiAddProduct";
import ApiAddProducts from "../components/ApiAddProducts";

const Appp = () => {
  const toast = useToast();

  const handleFail = () => {
    const id = toast.open(
      <div className="flex gap-2 bg-red-300 text-red-800 p-4 rounded-lg shadow-lg">
        <AlertCircle size={40} />
        <div>
          <h3 className="font-bold">Action Failed</h3>
          <p className="text-sm">This action failed miserably</p>
        </div>
      </div>
    );

    // Close the toast after 3 seconds
    setTimeout(() => {
      toast.close(id);
    }, 3000);
  };

  const handleLogin = () => {
    const id = toast.open(
      <div className="flex gap-2 bg-green-300 text-green-800 p-4 rounded-lg shadow-lg">
        <Shield size={40} />
        <div>
          <h3 className="font-bold">Authenticated</h3>
          <p>You are logged in Successfully</p>
        </div>
      </div>
    );

    // Close the toast after 2 seconds
    setTimeout(() => {
      toast.close(id);
    }, 2000);
  };

  const handleActivate = () => {
    const id = toast.open(
      <div className="flex gap-2 bg-blue-300 text-blue-800 p-4 rounded-lg shadow-lg">
        <Zap size={40} />
        <div>
          <h3 className="font-bold">Activated</h3>
          <p>Item activated Successfully</p>
        </div>
      </div>
    );

    // Close the toast after 1 second
    setTimeout(() => {
      toast.close(id);
    }, 1000);
  };

  return (
    <div>
      <div className="App">
        <button className="btn btn-danger" onClick={handleFail}>
          <AlertCircle /> Fail
        </button>
        <button className="btn btn-info" onClick={handleLogin}>
          <LogIn /> Login
        </button>
        <button className="btn btn-success" onClick={handleActivate}>
          <Zap /> Activate
        </button>
      </div>

      <ApiAddProduct />
      <ApiAddProducts />
    </div>
  );
};

export default Appp;
