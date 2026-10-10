import { toBn } from "@/lib/format";

interface CategoryHeaderProps {
    icon: string;
    nameBn: string;
    count: number;
}

const CategoryHeader = ({ icon, nameBn, count }: CategoryHeaderProps) => (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <span className="text-5xl">{icon}</span>
        <div>
            <h1 className="text-2xl font-bold">{nameBn}</h1>
            <p className="text-sm text-gray-500">
                {toBn(count)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
        </div>
    </div>
);

export default CategoryHeader;