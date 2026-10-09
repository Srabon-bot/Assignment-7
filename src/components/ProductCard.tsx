import Link from "next/link";
import { Product } from "@/lib/types";
import { toBn, unitLine } from "@/lib/format";
import PriceChange from "./PriceChange";

const ProductCard = ({ product }: { product: Product }) => (
    <Link
        href={`/product/${product.slug}`}
        className="block rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
    >
        <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xl">
                {product.image}
            </div>
            <div>
                <h3 className="font-bold leading-tight">{product.nameBn}</h3>
                <p className="text-xs">{unitLine(product.unit)}</p>
            </div>
        </div>

        <p className="mt-4 text-xs">আজকের দাম</p>
        <div className="flex items-center justify-between">
            <p className="text-lg font-bold">{toBn(product.today)} টাকা</p>
            <PriceChange change={product.change} />
        </div>
    </Link>
);

export default ProductCard;