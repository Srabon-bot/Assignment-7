import { Suspense } from "react";
import EmptyState from "@/components/EmptyState";
import MarketTable from "@/components/MarketTable";
import PriceSummary from "@/components/PriceSummary";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductSummary from "@/components/ProductSummary";
import { getProduct } from "@/lib/api";
import { getPriceStats } from "@/lib/stats";

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

  const stats = getPriceStats(product.markets);

  return (
    <>
      <ProductBreadcrumb
        categorySlug={product.category}
        categoryName={product.categoryNameBn}
        productName={product.nameBn}
      />

      <ProductSummary product={product} />

      {/* one section for both: price summary + market table */}
      {stats && (
        <section className="space-y-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <PriceSummary
            min={stats.min}
            max={stats.max}
            avg={stats.avg}
            unit={product.unit}
          />
          <MarketTable markets={product.markets} />
        </section>
      )}
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