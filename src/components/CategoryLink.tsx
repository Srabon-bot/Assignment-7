"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoryLinkProps {
    slug: string;
    nameBn: string;
    icon: string;
}

const CategoryLink = ({ slug, nameBn, icon }: CategoryLinkProps) => {
    const pathname = usePathname();
    const href = `/${slug}`;
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold transition-colors ${isActive
                    ? "bg-[#047F39] text-white"
                    : "text-gray-600 hover:bg-green-50 hover:text-[#047F39]"
                }`}
        >
            <span>{icon}</span>
            <span>{nameBn}</span>
        </Link>
    );
};

export default CategoryLink;