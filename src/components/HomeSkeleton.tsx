import ProductCardSkeleton from "./ProductCardSkeleton";

const SectionSkeleton = () => (
    <section>
        <div className="skeleton h-7 w-44" />
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    </section>
);

const HomeSkeleton = () => (
    <>
        <SectionSkeleton />
        <SectionSkeleton />
        <SectionSkeleton />
    </>
);

export default HomeSkeleton;