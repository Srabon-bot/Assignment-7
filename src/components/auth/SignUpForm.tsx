"use client";

import FormField from "./FormField";

const SignUpForm = () => {
    // placeholder: real sign up logic is added with the auth setup
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                className="btn w-full border-none bg-[#047F39] font-medium text-white shadow-md"
            >
                অ্যাকাউন্ট তৈরি করুন
            </button>
        </form>
    );
};

export default SignUpForm;