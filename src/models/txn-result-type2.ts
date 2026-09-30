import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of this txnResult is the type of this txnResult.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **A general type of result.**
 * - `2` - **Fraud prevention alert.**
 * - `3` - **Processor error.**
 * - `4` - **CVV matching alert.**
 * - `5` - **AVS check alert.**
 * - `6` - **AAVS check alert.**
 * - `7` - **Network error.**
 * - `8` - **3DS check alert.**
 * - `9` - **Pinless Debit conversion failed attempt.**
 *
 * </details>
 */
export const TxnResultType2 = {
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
export type TxnResultType2 = (typeof TxnResultType2)[keyof typeof TxnResultType2] | (number & {});

export const txnResultType2Schema: EnumSchema<TxnResultType2> = s.enumOf<TxnResultType2>(TxnResultType2);
