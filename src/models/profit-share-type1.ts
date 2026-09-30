import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the Profit Share should be processed when there is an income, expense, or both.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `income` - **Profit Share processing for income-only.**
 * - `expense` - **Profit Share processing for expense-only.**
 * - `both` - **Profit Share processing for both income and expense.**
 *
 * </details>
 */
export const ProfitShareType1 = {
  Income: "income",
  Expense: "expense",
  Both: "both",
} as const;
export type ProfitShareType1 = (typeof ProfitShareType1)[keyof typeof ProfitShareType1] | (string & {});

export const profitShareType1Schema: EnumSchema<ProfitShareType1> =
  s.enumOf<ProfitShareType1>(ProfitShareType1);
