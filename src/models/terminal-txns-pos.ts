import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsPos = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsPos = (typeof TerminalTxnsPos)[keyof typeof TerminalTxnsPos] | (number & {});

export const terminalTxnsPosSchema: EnumSchema<TerminalTxnsPos> = s.enumOf<TerminalTxnsPos>(TerminalTxnsPos);
