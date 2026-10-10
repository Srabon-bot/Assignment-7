"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { authErrorMessage } from "@/lib/auth-helpers";
import FormField from "./FormField";

const SignUpForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = String(form.get("name")).trim();
        const email = String(form.get("email"));
        const password = String(form.get("password"));
        const confirmPassword = String(form.get("confirmPassword"));

        if (!name) {
            toast.error("নাম লিখুন।");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("পাসওয়ার্ড দুটি মিলছে না।");
            return;
        }

        setLoading(true);
        const { error } = await authClient.signUp.email({ name, email, password });
        setLoading(false);

        if (error) {
            toast.error(authErrorMessage(error));
            return;
        }

        toast.success("অ্যাকাউন্ট তৈরি হয়েছে! এবার সাইন ইন করুন।");
        router.push("/signin");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
                label="নাম"
                id="name"
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                required
            />
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
                minLength={8}
                required
            />
            <FormField
                label="পাসওয়ার্ড নিশ্চিত করুন"
                id="confirmPassword"
                type="password"
                placeholder="আবার লিখুন"
                minLength={8}
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
                    "অ্যাকাউন্ট তৈরি করুন"
                )}
            </button>
        </form>
    );
};

export default SignUpForm;