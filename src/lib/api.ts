import { Category, Product } from "./types";

const BASE_URLS = [
  "https://api.abcz.workers.dev/api/bazardor",
  "https://api.api-store.workers.dev/api/bazardor",
];

async function apiFetch(path: string, revalidate: number): Promise<Response> {
  let lastError: unknown;

  for (const base of BASE_URLS) {
    try {
      const res = await fetch(`${base}${path}`, { next: { revalidate } });
      if (res.ok || res.status === 404) return res;
      lastError = new Error(`Request failed with status ${res.status}`);
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError;
}

export async function getProducts(category?: string): Promise<Product[]> {
  const path = category
    ? `/products?category=${encodeURIComponent(category)}`
    : "/products";

  const res = await apiFetch(path, 300);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProduct(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) ?? null;
}

export async function getCategories(): Promise<Category[]> {
  const res = await apiFetch("/categories", 3600);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getCategory(slug: string): Promise<Category | null> {
  const res = await apiFetch(`/categories/${encodeURIComponent(slug)}`, 3600);
  if (!res.ok) return null;

  const data = await res.json();
  return data?.slug ? data : null;
}