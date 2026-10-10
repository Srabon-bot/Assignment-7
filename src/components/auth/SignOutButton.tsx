"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const SignOutButton = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা যায়নি, আবার চেষ্টা করুন।");
            return;
        }

        toast.success("সফলভাবে সাইন আউট হয়েছে।");
        router.push("/");
        router.refresh();
    };

    return (
        <button
            type="button"
            onClick={handleSignOut}
            className="btn btn-sm sm:btn-md border border-[#D03739] bg-white font-medium text-[#D03739] hover:bg-red-50"
        >
            ↩ সাইন আউট
        </button>
    );
};

export default SignOutButton;