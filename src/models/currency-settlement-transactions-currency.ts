import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The currency of the amount in ISO-4217(alpha-3). */
export const CurrencySettlementTransactionsCurrency = {
  Usd: "USD",
  Eur: "EUR",
  Gbp: "GBP",
  Cad: "CAD",
  Chf: "CHF",
  Hkd: "HKD",
  Sgd: "SGD",
  MopEtc: "MOP etc.",
} as const;
export type CurrencySettlementTransactionsCurrency =
  | (typeof CurrencySettlementTransactionsCurrency)[keyof typeof CurrencySettlementTransactionsCurrency]
  | (string & {});

export const currencySettlementTransactionsCurrencySchema: EnumSchema<CurrencySettlementTransactionsCurrency> =
  s.enumOf<CurrencySettlementTransactionsCurrency>(CurrencySettlementTransactionsCurrency);
