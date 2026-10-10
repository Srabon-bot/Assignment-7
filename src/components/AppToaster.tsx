"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppToaster = () => (
    <ToastContainer
        position="top-center"
        autoClose={3000}
        style={{ "--toastify-font-family": "inherit" } as React.CSSProperties}
    />
);

export default AppToaster;