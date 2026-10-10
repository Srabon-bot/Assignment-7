import React from "react";
import CategoryLink from "./CategoryLink";
import { getCategories } from "@/lib/api";

const Navlinks = async () => {
    const data = await getCategories();

    return (
        <nav className="border-y border-gray-100 bg-white">
            <div className="container mx-auto flex items-center gap-2 overflow-x-auto px-4 py-2">
                {data.map((link) => (
                    <CategoryLink
                        key={link.id}
                        slug={link.slug}
                        nameBn={link.nameBn}
                        icon={link.icon}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Navlinks;