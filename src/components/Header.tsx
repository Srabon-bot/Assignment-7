import React from "react";
import Image from "next/image";
import Link from "next/link";
import CurrentDate from "./CurrentDate";
import AuthMenu from "./AuthMenu";

const Header = () => {
    return (
        <header className="bg-base-100 py-2">
            <div className="container mx-auto flex items-center justify-between px-4">

                <Link href="/" className="flex items-center gap-2">
                    <div className="flex items-center justify-center rounded-xl bg-green-600 p-2">
                        <Image
                            src="/assets/logo-icon.png"
                            alt="Logo"
                            width={18}
                            height={18}
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-lg font-bold leading-6 text-base-content">
                            বাজার দর
                        </span>
                        <CurrentDate />
                    </div>
                </Link>

                <AuthMenu />

            </div>
        </header>
    );
};

export default Header;