const CategorySkeleton = () => (
    <>
        {/* header */}
        <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="skeleton h-14 w-14 shrink-0 rounded-xl" />
            <div className="space-y-2">
                <div className="skeleton h-6 w-32" />
                <div className="skeleton h-4 w-56" />
            </div>
        </div>

        {/* sort bar */}
        <div className="flex justify-end rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="skeleton h-8 w-40" />
        </div>

        <div className="skeleton h-4 w-40" />

        {/* cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-4"
                >
                    <div className="flex items-center gap-3">
                        <div className="skeleton h-10 w-10 shrink-0 rounded-xl" />
                        <div className="space-y-2">
                            <div className="skeleton h-4 w-28" />
                            <div className="skeleton h-3 w-16" />
                        </div>
                    </div>
                    <div className="skeleton h-3 w-16" />
                    <div className="flex items-center justify-between">
                        <div className="skeleton h-5 w-24" />
                        <div className="skeleton h-5 w-14" />
                    </div>
                </div>
            ))}
        </div>
    </>
);

export default CategorySkeleton;