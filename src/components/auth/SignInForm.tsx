"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { authErrorMessage, getRedirectTarget } from "@/lib/auth-helpers";
import FormField from "./FormField";

const SignInForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = String(form.get("email"));
        const password = String(form.get("password"));

        setLoading(true);
        const { error } = await authClient.signIn.email({ email, password });
        setLoading(false);

        if (error) {
            toast.error(authErrorMessage(error));
            return;
        }

        toast.success("সফলভাবে সাইন ইন হয়েছে!");
        router.push(getRedirectTarget());
        router.refresh();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
                label="ইমেইল"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
            />
            <FormField
                label="পাসওয়ার্ড"
                id="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                required
            />

            <button
                type="submit"
                disabled={loading}
                className="btn w-full border-none bg-[#047F39] font-medium text-white shadow-md"
            >
                {loading ? (
                    <span className="loading loading-spinner loading-sm" />
                ) : (
                    "সাইন ইন"
                )}
            </button>
        </form>
    );
};

export default SignInForm;