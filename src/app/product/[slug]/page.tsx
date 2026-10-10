import { Suspense } from "react";
import EmptyState from "@/components/EmptyState";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductSummary from "@/components/ProductSummary";
import { getProduct } from "@/lib/api";

async function ProductContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProduct(slug).catch(() => null);

  if (!product) {
    return <EmptyState message="দুঃখিত, এই পণ্যটি খুঁজে পাওয়া যায়নি।" />;
  }

  return (
    <>
      <ProductBreadcrumb
        categorySlug={product.category}
        categoryName={product.categoryNameBn}
        productName={product.nameBn}
      />

      <ProductSummary product={product} />
    </>
  );
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="container mx-auto w-full flex-1 space-y-6 px-4 py-6">
      <Suspense fallback={<p className="text-gray-500">লোড হচ্ছে...</p>}>
        <ProductContent params={params} />
      </Suspense>
    </main>
  );
}