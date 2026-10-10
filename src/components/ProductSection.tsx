import { ReactNode } from "react";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
    title: ReactNode;
    subtitle?: string;
    products: Product[];
    id?: string;
}

const ProductSection = ({ title, subtitle, products, id }: ProductSectionProps) => (
    <section id={id} className="scroll-mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    </section>
);

export default ProductSection;