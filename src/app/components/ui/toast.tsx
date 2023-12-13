import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <div className="absolute">
      <ToastContainer />
    </div>
  );
};

export default Toast;
