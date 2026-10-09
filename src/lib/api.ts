import { Product } from "./types";

const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

export async function getProducts(category?: string): Promise<Product[]> {
  const url = category
    ? `${BASE_URL}/products?category=${encodeURIComponent(category)}`
    : `${BASE_URL}/products`;

  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}