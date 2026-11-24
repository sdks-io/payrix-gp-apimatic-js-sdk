import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FunctionsMerchantsAddressesFunction = {
  Business: "BUSINESS",
  PreviousBusiness: "PREVIOUS_BUSINESS",
  Legal: "LEGAL",
  Shipping: "SHIPPING",
} as const;
export type FunctionsMerchantsAddressesFunction =
  | (typeof FunctionsMerchantsAddressesFunction)[keyof typeof FunctionsMerchantsAddressesFunction]
  | (string & {});

export const functionsMerchantsAddressesFunctionSchema: EnumSchema<FunctionsMerchantsAddressesFunction> =
  s.enumOf<FunctionsMerchantsAddressesFunction>(FunctionsMerchantsAddressesFunction);
