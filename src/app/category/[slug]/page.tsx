import { Suspense } from "react";
import CategoryHeader from "@/components/CategoryHeader";
import CategoryProducts from "@/components/CategoryProducts";
import EmptyState from "@/components/EmptyState";
import { getCategory, getProducts } from "@/lib/api";

async function CategoryContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [category, products] = await Promise.all([
    getCategory(slug),
    getProducts(slug).catch(() => []),
  ]);

  if (!category || products.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <CategoryHeader
        icon={category.icon}
        nameBn={category.nameBn}
        count={products.length}
      />

      <CategoryProducts products={products} />
    </>
  );
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="container mx-auto w-full flex-1 space-y-6 px-4 py-6">
      <Suspense fallback={<p className="text-gray-500">লোড হচ্ছে...</p>}>
        <CategoryContent params={params} />
      </Suspense>
    </main>
  );
}