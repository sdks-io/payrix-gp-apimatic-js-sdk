import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The origin of this Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Credit Card Terminal.**
 * - `2` - **eCommerce System.**
 * - `3` - **Mail or Telephone Order Transaction.**
 * - `4` - **Apple Pay (deprecated).**
 * - `5` - **Successful 3D Secure Transaction.**
 * - `6` - **Attempted 3D Secure Transaction.**
 * - `7` - **Deprecated. Recurring Card Transaction.**
 * - `8` - **Payframe.**
 * - `9` - **Writing.**
 *
 * </details>
 */
export const TerminalTxnOrigin1 = {
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
export type TerminalTxnOrigin1 = (typeof TerminalTxnOrigin1)[keyof typeof TerminalTxnOrigin1] | (number & {});

export const terminalTxnOrigin1Schema: EnumSchema<TerminalTxnOrigin1> =
  s.enumOf<TerminalTxnOrigin1>(TerminalTxnOrigin1);
