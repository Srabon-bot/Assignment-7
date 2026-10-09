import { Unit } from "./types";

export const toBn = (n: number) => new Intl.NumberFormat("bn-BD").format(n);

export const toBnPercent = (n: number) =>
  new Intl.NumberFormat("bn-BD", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(Math.abs(n));

const UNIT_BN: Record<Unit, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export const unitBn = (unit: Unit) => UNIT_BN[unit] ?? unit;      // কেজি
export const unitLine = (unit: Unit) => `প্রতি ${unitBn(unit)}`;  // প্রতি কেজি