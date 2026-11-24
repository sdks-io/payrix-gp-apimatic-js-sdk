import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes the functions that an address can have.
 *        * BUSINESS - The business address of the merchant.
 *        * SHIPPING - The address product is sent to.
 */
export const FunctionsOrdersAddressesFunctions = {
  Shipping: "SHIPPING",
  Business: "BUSINESS",
} as const;
export type FunctionsOrdersAddressesFunctions =
  | (typeof FunctionsOrdersAddressesFunctions)[keyof typeof FunctionsOrdersAddressesFunctions]
  | (string & {});

export const functionsOrdersAddressesFunctionsSchema: EnumSchema<FunctionsOrdersAddressesFunctions> =
  s.enumOf<FunctionsOrdersAddressesFunctions>(FunctionsOrdersAddressesFunctions);
