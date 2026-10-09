import { Product } from "@/lib/types";
import { toBnPercent } from "@/lib/format";

const styles = {
    up: { color: "text-red-600", bg: "bg-red-50", symbol: "▲" },
    down: { color: "text-green-600", bg: "bg-green-50", symbol: "▼" },
    flat: { color: "text-gray-500", bg: "bg-gray-100", symbol: "—" },
};

const PriceChange = ({ change }: { change: Product["change"] }) => {
    const s = styles[change.dir];
    return (
        <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${s.color} ${s.bg}`}>
            {s.symbol} {toBnPercent(change.pct)}%
        </span>
    );
};

export default PriceChange;