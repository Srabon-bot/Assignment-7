import { Product } from "@/lib/types";
import { toBn, unitBn, unitLine } from "@/lib/format";
import PriceChange from "./PriceChange";

const ProductSummary = ({ product }: { product: Product }) => {
    // difference between today and yesterday, from the data itself
    const diff = product.today - product.yesterday;

    return (
        <section className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-4xl">
                    {product.image}
                </div>

                <div>
                    <h1 className="text-2xl font-bold sm:text-3xl">{product.nameBn}</h1>
                    <p className="text-sm text-gray-500">
                        {unitLine(product.unit)} · {product.categoryNameBn}
                    </p>
                    <p className="mt-1 text-sm">
                        {diff === 0 ? (
                            "গতকালের তুলনায় আজ দাম অপরিবর্তিত"
                        ) : (
                            <>
                                গতকালের তুলনায় আজ দাম{" "}
                                <strong>{diff > 0 ? "বেড়েছে" : "কমেছে"}</strong> ·{" "}
                                {toBn(Math.abs(diff))} টাকা
                            </>
                        )}
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-gray-100 px-8 py-4 text-center">
                <span className="text-sm text-gray-500">আজকের দাম</span>
                <span className="text-4xl font-bold">{toBn(product.today)}</span>
                <span className="text-sm text-gray-500">
                    টাকা / {unitBn(product.unit)}
                </span>
                <div className="mt-1">
                    <PriceChange change={product.change} />
                </div>
            </div>
        </section>
    );
};

export default ProductSummary;