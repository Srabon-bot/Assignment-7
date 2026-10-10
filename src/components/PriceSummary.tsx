import { toBnAvg, unitBn } from "@/lib/format";
import { Unit } from "@/lib/types";

interface PriceSummaryProps {
    min: number;
    max: number;
    avg: number;
    unit: Unit;
}

interface StatProps {
    label: string;
    value: number;
    note: string;
    color: string;
}

const Stat = ({ label, value, note, color }: StatProps) => (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <p className="text-xs text-gray-500">{label}</p>
        <p className={`mt-1 text-2xl font-bold ${color}`}>
            {toBnAvg(value)} <span className="text-sm font-medium">টাকা</span>
        </p>
        <p className="mt-1 text-xs text-gray-500">{note}</p>
    </div>
);

const PriceSummary = ({ min, max, avg, unit }: PriceSummaryProps) => (
    <div>
        <h2 className="text-lg font-bold">দামের সারসংক্ষেপ</h2>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Stat
                label="সর্বনিম্ন দাম"
                value={min}
                note="সবচেয়ে কম দামের বাজার"
                color="text-green-600"
            />
            <Stat
                label="সর্বাধিক দাম"
                value={max}
                note="সবচেয়ে বেশি দামের বাজার"
                color="text-red-600"
            />
            <Stat
                label="গড় দাম"
                value={avg}
                note={`প্রতি ${unitBn(unit)}-এর হিসাবে`}
                color="text-green-600"
            />
        </div>
    </div>
);

export default PriceSummary;