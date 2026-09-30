import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the currency conversion.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `customerAccepted` - **The customer accepted the currency conversion rate.**
 * - `customerRejected` - **The customer rejected the currency conversion rate.**
 * - `notEligible` - **This transaction is not eligible for currency conversion.**
 *
 * </details>
 */
export const CurrencyConversion1 = {
  CustomerAccepted: "customerAccepted",
  CustomerRejected: "customerRejected",
  NotEligible: "notEligible",
} as const;
export type CurrencyConversion1 =
  | (typeof CurrencyConversion1)[keyof typeof CurrencyConversion1]
  | (string & {});

export const currencyConversion1Schema: EnumSchema<CurrencyConversion1> =
  s.enumOf<CurrencyConversion1>(CurrencyConversion1);
