"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { authErrorMessage } from "@/lib/auth-helpers";
import FormField from "../auth/FormField";

const UpdateProfileForm = ({ defaultName }: { defaultName: string }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = String(new FormData(e.currentTarget).get("name")).trim();

        if (!name) {
            toast.error("নাম খালি রাখা যাবে না।");
            return;
        }

        setLoading(true);
        const { error } = await authClient.updateUser({ name });
        setLoading(false);

        if (error) {
            toast.error(authErrorMessage(error));
            return;
        }

        toast.success("তথ্য সফলভাবে আপডেট হয়েছে।");
        router.push("/profile");
        router.refresh();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8"
        >
            <h2 className="text-lg font-semibold">তথ্য</h2>

            <FormField
                label="নাম"
                id="name"
                type="text"
                defaultValue={defaultName}
                placeholder="আপনার নাম"
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
                    "আপডেট"
                )}
            </button>

            <p className="text-center text-sm text-gray-500">
                <Link href="/profile" className="hover:text-[#047F39]">
                    ← প্রোফাইলে ফিরে যান
                </Link>
            </p>
        </form>
    );
};

export default UpdateProfileForm;