import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the txn was imported from a report or not, this field is set automatically whether the
 * txn was imported from a report or not. This field is set automatically.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Imported**
 * - `1` - **Imported** </details>
 */
export const TxnsImported1 = {
  _0: 0,
  _1: 1,
} as const;
export type TxnsImported1 = (typeof TxnsImported1)[keyof typeof TxnsImported1] | (number & {});

export const txnsImported1Schema: EnumSchema<TxnsImported1> = s.enumOf<TxnsImported1>(TxnsImported1);
