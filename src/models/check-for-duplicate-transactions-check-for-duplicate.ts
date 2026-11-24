import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This flag is set by the merchant to indicate if duplicate checking on this transaction can be
 * skipped
 */
export const CheckForDuplicateTransactionsCheckForDuplicate = {
  Yes: "YES",
  No: "NO",
} as const;
export type CheckForDuplicateTransactionsCheckForDuplicate =
  | (typeof CheckForDuplicateTransactionsCheckForDuplicate)[keyof typeof CheckForDuplicateTransactionsCheckForDuplicate]
  | (string & {});

export const checkForDuplicateTransactionsCheckForDuplicateSchema: EnumSchema<CheckForDuplicateTransactionsCheckForDuplicate> =
  s.enumOf<CheckForDuplicateTransactionsCheckForDuplicate>(CheckForDuplicateTransactionsCheckForDuplicate);
