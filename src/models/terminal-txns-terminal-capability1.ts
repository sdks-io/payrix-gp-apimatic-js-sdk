import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Capabilities of the terminal device.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Key entry only terminal.**
 * - `2` - **Can read magnetic stripe.**
 * - `3` - **Integrated circuit reader.**
 * - `4` - **Can detect contactless payment.**
 *
 * </details>
 */
export const TerminalTxnsTerminalCapability1 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type TerminalTxnsTerminalCapability1 =
  | (typeof TerminalTxnsTerminalCapability1)[keyof typeof TerminalTxnsTerminalCapability1]
  | (number & {});

export const terminalTxnsTerminalCapability1Schema: EnumSchema<TerminalTxnsTerminalCapability1> =
  s.enumOf<TerminalTxnsTerminalCapability1>(TerminalTxnsTerminalCapability1);
