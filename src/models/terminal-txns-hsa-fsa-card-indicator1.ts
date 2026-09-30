import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the card is a Flexible Spending Account (FSA) or Health Savings Account (HSA) card.
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not an HSA/FSA card.**
 * - `1` - **HSA/FSA card.**
 *
 * </details>
 */
export const TerminalTxnsHsaFsaCardIndicator1 = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsHsaFsaCardIndicator1 =
  | (typeof TerminalTxnsHsaFsaCardIndicator1)[keyof typeof TerminalTxnsHsaFsaCardIndicator1]
  | (number & {});

export const terminalTxnsHsaFsaCardIndicator1Schema: EnumSchema<TerminalTxnsHsaFsaCardIndicator1> =
  s.enumOf<TerminalTxnsHsaFsaCardIndicator1>(TerminalTxnsHsaFsaCardIndicator1);
