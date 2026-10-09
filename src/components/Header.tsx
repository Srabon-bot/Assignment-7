import React from "react";
import Image from "next/image";
import Link from "next/link";
import CurrentDate from "./CurrentDate";

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

                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 hover:bg-base-200"
                    >
                        <Image
                            src="/assets/Avatar.png"
                            alt="User avatar"
                            width={30}
                            height={30}
                            className="rounded-lg object-cover"
                        />

                        <span className="text-sm font-medium">Rezwan</span>

                        <span className="text-xs text-base-content/60">⌄</span>
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu z-50 mt-2 w-40 rounded-box bg-base-100 p-2 shadow-lg"
                    >
                        <li><a>👤 আমার প্রোফাইল</a></li>
                        <li><a className="text-[#D03739]">↩ সাইন আউট</a></li>
                    </ul>
                </div>

            </div>
        </header>
    );
};

export default Header;