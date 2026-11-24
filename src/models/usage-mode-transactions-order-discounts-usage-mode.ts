import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if the discount can be stacked with other discounts. */
export const UsageModeTransactionsOrderDiscountsUsageMode = {
  Single: "SINGLE",
  Multiple: "MULTIPLE",
} as const;
export type UsageModeTransactionsOrderDiscountsUsageMode =
  | (typeof UsageModeTransactionsOrderDiscountsUsageMode)[keyof typeof UsageModeTransactionsOrderDiscountsUsageMode]
  | (string & {});

export const usageModeTransactionsOrderDiscountsUsageModeSchema: EnumSchema<UsageModeTransactionsOrderDiscountsUsageMode> =
  s.enumOf<UsageModeTransactionsOrderDiscountsUsageMode>(UsageModeTransactionsOrderDiscountsUsageMode);
