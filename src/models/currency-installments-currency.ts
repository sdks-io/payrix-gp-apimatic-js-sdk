import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The currency of the amount in ISO-4217(alpha-3). */
export const CurrencyInstallmentsCurrency = {
  Usd: "USD",
  Eur: "EUR",
  Gbp: "GBP",
  Cad: "CAD",
  Chf: "CHF",
  Hkd: "HKD",
  Sgd: "SGD",
  MoPetc: "MOPetc.",
} as const;
export type CurrencyInstallmentsCurrency =
  | (typeof CurrencyInstallmentsCurrency)[keyof typeof CurrencyInstallmentsCurrency]
  | (string & {});

export const currencyInstallmentsCurrencySchema: EnumSchema<CurrencyInstallmentsCurrency> =
  s.enumOf<CurrencyInstallmentsCurrency>(CurrencyInstallmentsCurrency);
