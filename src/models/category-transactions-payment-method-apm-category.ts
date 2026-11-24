import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the category of the alternate payment method . */
export const CategoryTransactionsPaymentMethodApmCategory = {
  EWallet: "E_WALLET",
  Bnpl: "BNPL",
} as const;
export type CategoryTransactionsPaymentMethodApmCategory =
  | (typeof CategoryTransactionsPaymentMethodApmCategory)[keyof typeof CategoryTransactionsPaymentMethodApmCategory]
  | (string & {});

export const categoryTransactionsPaymentMethodApmCategorySchema: EnumSchema<CategoryTransactionsPaymentMethodApmCategory> =
  s.enumOf<CategoryTransactionsPaymentMethodApmCategory>(CategoryTransactionsPaymentMethodApmCategory);
