import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsHsaFsaCardIndicator = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsHsaFsaCardIndicator =
  | (typeof TerminalTxnsHsaFsaCardIndicator)[keyof typeof TerminalTxnsHsaFsaCardIndicator]
  | (number & {});

export const terminalTxnsHsaFsaCardIndicatorSchema: EnumSchema<TerminalTxnsHsaFsaCardIndicator> =
  s.enumOf<TerminalTxnsHsaFsaCardIndicator>(TerminalTxnsHsaFsaCardIndicator);
