import Link from "next/link";

interface ProductBreadcrumbProps {
    categorySlug: string;
    categoryName: string;
    productName: string;
}

const ProductBreadcrumb = ({
    categorySlug,
    categoryName,
    productName,
}: ProductBreadcrumbProps) => (
    <nav
        aria-label="breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
    >
        <Link href="/" className="hover:text-[#047F39]">
            হোম
        </Link>
        <span>›</span>
        <Link href={`/category/${categorySlug}`} className="hover:text-[#047F39]">
            {categoryName}
        </Link>
        <span>›</span>
        <span className="text-gray-700">{productName}</span>
    </nav>
);

export default ProductBreadcrumb;