"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { toBn } from "@/lib/format";
import ProductCard from "./ProductCard";

type SortType = "default" | "asc" | "desc";

const CategoryProducts = ({ products }: { products: Product[] }) => {
    const [sort, setSort] = useState<SortType>("default");

    const sorted = [...products].sort((a, b) => {
        if (sort === "asc") return a.today - b.today;
        if (sort === "desc") return b.today - a.today;
        return 0;
    });

    return (
        <>
            <div className="flex items-center justify-end gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <label htmlFor="sort" className="text-sm text-gray-500">
                    সাজান
                </label>
                <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortType)}
                    className="select select-sm bg-white"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="asc">দাম: কম থেকে বেশি</option>
                    <option value="desc">দাম: বেশি থেকে কম</option>
                </select>
            </div>

            <p className="text-sm text-gray-500">
                মোট {toBn(sorted.length)}টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sorted.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </>
    );
};

export default CategoryProducts;