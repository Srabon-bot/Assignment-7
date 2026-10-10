"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const AuthMenu = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    // skeleton while the session loads
    if (isPending) {
        return <div className="skeleton h-9 w-40 rounded-full" />;
    }

    // logged out: the two buttons
    if (!session) {
        return (
            <div className="flex items-center gap-2 sm:gap-4">
                <Link
                    href="/signin"
                    className="btn btn-ghost btn-sm sm:btn-md font-medium"
                >
                    সাইন ইন
                </Link>
                <Link
                    href="/signup"
                    className="btn btn-sm sm:btn-md border-none bg-[#047F39] font-medium text-white shadow-md"
                >
                    সাইন আপ
                </Link>
            </div>
        );
    }

    // logged in: first letter + name dropdown
    const { name, email } = session.user;
    const initial = (name || email).trim().charAt(0).toUpperCase();

    const closeDropdown = () =>
        (document.activeElement as HTMLElement | null)?.blur();

    const handleSignOut = async () => {
        closeDropdown();

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
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white py-1 pl-1 pr-3 hover:bg-gray-50"
            >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#047F39] text-sm font-bold text-white">
                    {initial}
                </span>
                <span className="max-w-[110px] truncate text-sm font-medium">
                    {name}
                </span>
                <span className="text-xs text-base-content/60">▾</span>
            </div>

            <div
                tabIndex={0}
                className="dropdown-content z-50 mt-2 w-60 rounded-box border border-gray-200 bg-base-100 p-2 shadow-lg"
            >
                <div className="border-b border-gray-100 px-3 py-2">
                    <p className="truncate font-bold">{name}</p>
                    <p className="truncate text-xs text-gray-500">{email}</p>
                </div>

                <ul className="menu p-0 pt-1">
                    <li>
                        <Link href="/profile" onClick={closeDropdown}>
                            👤 আমার প্রোফাইল
                        </Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="text-[#D03739]"
                        >
                            ↩ সাইন আউট
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AuthMenu;