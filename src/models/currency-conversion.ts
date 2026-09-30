import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CurrencyConversion = {
  CustomerAccepted: "customerAccepted",
  CustomerRejected: "customerRejected",
  NotEligible: "notEligible",
} as const;
export type CurrencyConversion = (typeof CurrencyConversion)[keyof typeof CurrencyConversion] | (string & {});

export const currencyConversionSchema: EnumSchema<CurrencyConversion> =
  s.enumOf<CurrencyConversion>(CurrencyConversion);
