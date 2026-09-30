import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of financial account: debit, credit, or both.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `all` - **Debit/checking and credit**
 * - `credit` - **Credit only**
 * - `debit` - **Debit/checking only**
 *
 * </details>
 */
export const AccountType1 = {
  All: "all",
  Credit: "credit",
  Debit: "debit",
} as const;
export type AccountType1 = (typeof AccountType1)[keyof typeof AccountType1] | (string & {});

export const accountType1Schema: EnumSchema<AccountType1> = s.enumOf<AccountType1>(AccountType1);
