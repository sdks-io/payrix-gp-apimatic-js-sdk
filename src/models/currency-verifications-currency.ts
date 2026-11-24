import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The currency of the amount in ISO-4217(alpha-3). */
export const CurrencyVerificationsCurrency = {
  Usd: "USD",
  Eur: "EUR",
  Gbp: "GBP",
  Cad: "CAD",
  Chf: "CHF",
  Hkd: "HKD",
  Sgd: "SGD",
  MopEtc: "MOP etc.",
} as const;
export type CurrencyVerificationsCurrency =
  | (typeof CurrencyVerificationsCurrency)[keyof typeof CurrencyVerificationsCurrency]
  | (string & {});

export const currencyVerificationsCurrencySchema: EnumSchema<CurrencyVerificationsCurrency> =
  s.enumOf<CurrencyVerificationsCurrency>(CurrencyVerificationsCurrency);
