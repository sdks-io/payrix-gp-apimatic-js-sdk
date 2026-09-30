import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current active status of the terminal.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Inactive**
 * - `1` - **Active**
 *
 * </details>
 */
export const TerminalStatus1 = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalStatus1 = (typeof TerminalStatus1)[keyof typeof TerminalStatus1] | (number & {});

export const terminalStatus1Schema: EnumSchema<TerminalStatus1> = s.enumOf<TerminalStatus1>(TerminalStatus1);
