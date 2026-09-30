import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of this terminalTxnResult.
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
 *
 * </details>
 */
export const TerminalTxnResultType2 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
} as const;
export type TerminalTxnResultType2 =
  | (typeof TerminalTxnResultType2)[keyof typeof TerminalTxnResultType2]
  | (number & {});

export const terminalTxnResultType2Schema: EnumSchema<TerminalTxnResultType2> =
  s.enumOf<TerminalTxnResultType2>(TerminalTxnResultType2);
