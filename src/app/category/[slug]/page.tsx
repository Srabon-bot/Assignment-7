import { Suspense } from "react";
import CategoryHeader from "@/components/CategoryHeader";
import ProductCard from "@/components/ProductCard";
import { getCategory, getProducts } from "@/lib/api";
import { toBn } from "@/lib/format";

async function CategoryContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [category, products] = await Promise.all([
    getCategory(slug),
    getProducts(slug),
  ]);

  if (!category) return <p>ক্যাটাগরি পাওয়া যায়নি।</p>; // replaced by EmptyState in Part 4

  return (
    <>
      <CategoryHeader
        icon={category.icon}
        nameBn={category.nameBn}
        count={products.length}
      />

      <p className="text-sm text-gray-500">
        মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
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