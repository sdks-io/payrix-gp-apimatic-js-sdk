import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this debit card may be charged as credit over the credit networks.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Debit charge as 'credit' disabled.**
 * - `1` - **Debit charge as 'credit' enabled.**
 *
 * </details>
 */
export const BinsDebitOverCreditEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type BinsDebitOverCreditEnabled1 =
  | (typeof BinsDebitOverCreditEnabled1)[keyof typeof BinsDebitOverCreditEnabled1]
  | (number & {});

export const binsDebitOverCreditEnabled1Schema: EnumSchema<BinsDebitOverCreditEnabled1> =
  s.enumOf<BinsDebitOverCreditEnabled1>(BinsDebitOverCreditEnabled1);
