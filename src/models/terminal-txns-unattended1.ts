import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the card was swiped at an unattended terminal during this Transaction. This field is set
 * to '0' by default. <details> <summary>Valid Values</summary>
 *
 * - `0` - **Attended terminal.**
 * - `1` - **Unattended terminal.**
 *
 * </details>
 */
export const TerminalTxnsUnattended1 = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsUnattended1 =
  | (typeof TerminalTxnsUnattended1)[keyof typeof TerminalTxnsUnattended1]
  | (number & {});

export const terminalTxnsUnattended1Schema: EnumSchema<TerminalTxnsUnattended1> =
  s.enumOf<TerminalTxnsUnattended1>(TerminalTxnsUnattended1);
