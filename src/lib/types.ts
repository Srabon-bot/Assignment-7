export interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

export type Unit = "kg" | "litre" | "dozen" | "piece";

export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: Unit;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: { dir: "up" | "down" | "flat"; pct: number };
  markets: Market[];
}

export interface Category {
  id: string | number;
  slug: string;
  nameBn: string;
  icon: string;
}