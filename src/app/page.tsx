import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import { getProducts } from "@/lib/api";
import { toBn } from "@/lib/format";

export default async function Home() {
  const products = await getProducts();

  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <main className="container mx-auto w-full flex-1 space-y-10 px-4 py-6">
      <Hero />

      <ProductSection
        title={
          <>
            <span className="text-green-600">▲</span> আজ দাম বেড়েছে
          </>
        }
        products={risers}
      />

      <ProductSection
        title={
          <>
            <span className="text-red-600">▼</span> আজ দাম কমেছে
          </>
        }
        products={fallers}
      />
    </main>
  );
}