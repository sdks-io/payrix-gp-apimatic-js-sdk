import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to allow partial amount authorizations of this Transaction. For example, if the
 * transaction amount is $1000 and the processor only authorizes a smaller amount, then enabling
 * this field lets the Transaction proceed anyway.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Partial amount authorizations are not allowed.**
 *
 * - `1` - **Partial amount authorizations are allowed.**
 *
 * </details>
 */
export const TxnsAllowPartial1 = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsAllowPartial1 = (typeof TxnsAllowPartial1)[keyof typeof TxnsAllowPartial1] | (number & {});

export const txnsAllowPartial1Schema: EnumSchema<TxnsAllowPartial1> =
  s.enumOf<TxnsAllowPartial1>(TxnsAllowPartial1);
