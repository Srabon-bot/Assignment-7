import { Market } from "@/lib/types";
import { toBn, toBnAvg } from "@/lib/format";
import { marketAvg } from "@/lib/stats";

const MarketTable = ({ markets }: { markets: Market[] }) => {
    // cheapest market (by average) first
    const rows = [...markets].sort((a, b) => marketAvg(a) - marketAvg(b));

    return (
        <div>
            <h2 className="text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full min-w-[640px] text-left text-sm">
                    <thead>
                        <tr className="text-gray-500">
                            <th className="px-4 py-3 font-medium">বাজার</th>
                            <th className="px-4 py-3 font-medium">বিভাগ</th>
                            <th className="px-4 py-3 text-right font-medium">সর্বনিম্ন</th>
                            <th className="px-4 py-3 text-right font-medium">সর্বাধিক</th>
                            <th className="px-4 py-3 text-right font-medium">গড়</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((m) => (
                            <tr
                                key={`${m.market}-${m.division}`}
                                className="border-t border-gray-200 even:bg-green-50/60"
                            >
                                <td className="px-4 py-3">{m.market}</td>
                                <td className="px-4 py-3">{m.division}</td>
                                <td className="px-4 py-3 text-right">{toBn(m.min)} টাকা</td>
                                <td className="px-4 py-3 text-right">{toBn(m.max)} টাকা</td>
                                <td className="px-4 py-3 text-right font-bold">
                                    {toBnAvg(marketAvg(m))} টাকা
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MarketTable;