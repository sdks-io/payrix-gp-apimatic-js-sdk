import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsPin = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsPin = (typeof TerminalTxnsPin)[keyof typeof TerminalTxnsPin] | (number & {});

export const terminalTxnsPinSchema: EnumSchema<TerminalTxnsPin> = s.enumOf<TerminalTxnsPin>(TerminalTxnsPin);
