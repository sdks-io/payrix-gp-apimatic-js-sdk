import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if a transaction is being processed through a Mobile POS.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Non-mobile POS.**
 *
 * - `1` - **Mobile POS.**
 *
 * </details>
 */
export const TxnsMobile1 = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsMobile1 = (typeof TxnsMobile1)[keyof typeof TxnsMobile1] | (number & {});

export const txnsMobile1Schema: EnumSchema<TxnsMobile1> = s.enumOf<TxnsMobile1>(TxnsMobile1);
