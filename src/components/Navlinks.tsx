import React from "react";
import CategoryLink from "./CategoryLink";

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const Navlinks = async () => {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/categories"
    );

    const data: Category[] = await res.json();

    return (
        <nav className="border-y border-gray-100 bg-white">
            <div className="container mx-auto flex items-center gap-5 pb-2">
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