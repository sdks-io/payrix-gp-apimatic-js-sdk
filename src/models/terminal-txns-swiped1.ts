import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the card was swiped during this Transaction. This field is set to '1' automatically if
 * 'track' data was received.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Swiped.**
 * - `1` - **Swiped.**
 *
 * </details>
 */
export const TerminalTxnsSwiped1 = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsSwiped1 =
  | (typeof TerminalTxnsSwiped1)[keyof typeof TerminalTxnsSwiped1]
  | (number & {});

export const terminalTxnsSwiped1Schema: EnumSchema<TerminalTxnsSwiped1> =
  s.enumOf<TerminalTxnsSwiped1>(TerminalTxnsSwiped1);
