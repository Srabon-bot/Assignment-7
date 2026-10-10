const ProductSkeleton = () => (
    <>
        {/* breadcrumb */}
        <div className="skeleton h-4 w-56" />

        {/* summary card */}
        <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
                <div className="skeleton h-20 w-20 shrink-0 rounded-2xl" />
                <div className="space-y-2">
                    <div className="skeleton h-8 w-48" />
                    <div className="skeleton h-4 w-32" />
                    <div className="skeleton h-4 w-64" />
                </div>
            </div>
            <div className="skeleton h-32 w-full rounded-2xl sm:w-44" />
        </div>

        {/* price summary + table, one section like the real page */}
        <section className="space-y-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div>
                <div className="skeleton h-6 w-40" />
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="space-y-2 rounded-2xl border border-gray-200 p-4"
                        >
                            <div className="skeleton h-3 w-20" />
                            <div className="skeleton h-7 w-24" />
                            <div className="skeleton h-3 w-32" />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="skeleton h-6 w-48" />
                <div className="mt-4 space-y-2 rounded-2xl border border-gray-200 p-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="skeleton h-6 w-full" />
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default ProductSkeleton;