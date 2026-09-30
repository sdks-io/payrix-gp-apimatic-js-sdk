import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnResultType = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
} as const;
export type TerminalTxnResultType =
  | (typeof TerminalTxnResultType)[keyof typeof TerminalTxnResultType]
  | (number & {});

export const terminalTxnResultTypeSchema: EnumSchema<TerminalTxnResultType> =
  s.enumOf<TerminalTxnResultType>(TerminalTxnResultType);
