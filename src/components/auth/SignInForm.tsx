"use client";

import FormField from "./FormField";

const SignInForm = () => {
    // placeholder: real sign in logic is added with the auth setup
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                className="btn w-full border-none bg-[#047F39] font-medium text-white shadow-md"
            >
                সাইন ইন
            </button>
        </form>
    );
};

export default SignInForm;