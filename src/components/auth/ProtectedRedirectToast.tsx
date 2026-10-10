"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

const ProtectedRedirectToast = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (params.get("reason") === "protected") {
            toast.error("এই পৃষ্ঠাটি দেখতে আগে সাইন ইন করুন।", {
                toastId: "protected",
            });
        }
    }, []);

    return null;
};

export default ProtectedRedirectToast;