import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnOrigin = {
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
export type TerminalTxnOrigin = (typeof TerminalTxnOrigin)[keyof typeof TerminalTxnOrigin] | (number & {});

export const terminalTxnOriginSchema: EnumSchema<TerminalTxnOrigin> =
  s.enumOf<TerminalTxnOrigin>(TerminalTxnOrigin);
