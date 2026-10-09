import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { getProducts } from "@/lib/api";
import { toBn, unitBn } from "@/lib/format";
import PriceChange from "./PriceChange";

const PriceTicker = async () => {
    const products = await getProducts();

    return (
        <div className="border-b border-gray-100 bg-white">
            <MarqueeText direction="right" duration={15} className="py-2">
                {products.map((p) => (
                    <span key={p.id} className="flex items-center gap-2 px-4 text-sm">
                        <span>{p.image}</span>
                        <span className="font-medium">{p.nameBn}</span>
                        <span className="">
                            {toBn(p.today)} টাকা/{unitBn(p.unit)}
                        </span>
                        <PriceChange change={p.change} />
                    </span>
                ))}
            </MarqueeText>
        </div>
    );
};

export default PriceTicker;