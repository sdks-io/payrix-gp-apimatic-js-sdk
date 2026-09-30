import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The origin of the transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Unknown.**
 *
 * - `1` - **Originated at a credit card terminal.**
 *
 * - `2` - **Originated through an eCommerce system.**
 *
 * - `3` - **Originated as a mail order or telephone order transaction.**
 *
 * - `4` - **Originated with Apple Pay.**
 *
 * - `5` - **Originated as a Successful 3D Secure transaction.**
 *
 * - `6` - **Originated as an Attempted 3D Secure transaction.**
 *
 * - `7` - **Deprecated. Originated as a recurring transaction on a card.**
 *
 * - `8` - **Originated in a PayFrame.**
 *
 * - `9` - **Originated in writing.**
 *
 * </details>
 */
export const TxnOrigin1 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
} as const;
export type TxnOrigin1 = (typeof TxnOrigin1)[keyof typeof TxnOrigin1] | (number & {});

export const txnOrigin1Schema: EnumSchema<TxnOrigin1> = s.enumOf<TxnOrigin1>(TxnOrigin1);
