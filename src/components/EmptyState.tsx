import Link from "next/link";

interface EmptyStateProps {
    title?: string;
    message?: string;
}

const EmptyState = ({
    title = "৪০৪",
    message = "দুঃখিত, এই পৃষ্ঠায় কোনো পণ্য পাওয়া যায়নি।",
}: EmptyStateProps) => (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-16 text-center">
        <span className="text-5xl">🛒</span>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-gray-500">{message}</p>
        <Link
            href="/"
            className="btn btn-sm sm:btn-md mt-2 border-none bg-[#047F39] text-white"
        >
            হোম পেজে ফিরে যান
        </Link>
    </div>
);

export default EmptyState;