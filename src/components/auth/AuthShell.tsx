import Link from "next/link";
import { ReactNode } from "react";
import SocialButtons from "./SocialButtons";

interface AuthShellProps {
    title: string;
    subtitle: string;
    switchText: string;
    switchLinkText: string;
    switchHref: string;
    children: ReactNode;
}

const AuthShell = ({
    title,
    subtitle,
    switchText,
    switchLinkText,
    switchHref,
    children,
}: AuthShellProps) => (
    <div className="mx-auto w-full max-w-md">
        <div className="text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
            <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            {children}

            <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="h-px flex-1 bg-gray-200" />
                অথবা
                <span className="h-px flex-1 bg-gray-200" />
            </div>

            <SocialButtons />

            <p className="text-center text-sm">
                {switchText}{" "}
                <Link href={switchHref} className="text-[#047F39] hover:underline">
                    {switchLinkText}
                </Link>
            </p>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#047F39]">
                ← হোম পেজে ফিরে যান
            </Link>
        </p>
    </div>
);

export default AuthShell;