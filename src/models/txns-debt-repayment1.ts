import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If this transaction is for debt repayment or not for debt repayment.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Transaction not for debt repayment.**
 *
 * - `1` - **Transaction for debt repayment.**
 *
 * </details>
 */
export const TxnsDebtRepayment1 = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsDebtRepayment1 = (typeof TxnsDebtRepayment1)[keyof typeof TxnsDebtRepayment1] | (number & {});

export const txnsDebtRepayment1Schema: EnumSchema<TxnsDebtRepayment1> =
  s.enumOf<TxnsDebtRepayment1>(TxnsDebtRepayment1);
