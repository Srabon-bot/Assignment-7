const ProductCardSkeleton = () => (
    <div className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
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
);

export default ProductCardSkeleton;