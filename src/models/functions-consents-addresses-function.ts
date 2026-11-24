import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FunctionsConsentsAddressesFunction = {
  Business: "BUSINESS",
  PreviousBusiness: "PREVIOUS_BUSINESS",
  Shipping: "SHIPPING",
  Legal: "LEGAL",
} as const;
export type FunctionsConsentsAddressesFunction =
  | (typeof FunctionsConsentsAddressesFunction)[keyof typeof FunctionsConsentsAddressesFunction]
  | (string & {});

export const functionsConsentsAddressesFunctionSchema: EnumSchema<FunctionsConsentsAddressesFunction> =
  s.enumOf<FunctionsConsentsAddressesFunction>(FunctionsConsentsAddressesFunction);
