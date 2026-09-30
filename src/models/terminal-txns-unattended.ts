import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsUnattended = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsUnattended =
  | (typeof TerminalTxnsUnattended)[keyof typeof TerminalTxnsUnattended]
  | (number & {});

export const terminalTxnsUnattendedSchema: EnumSchema<TerminalTxnsUnattended> =
  s.enumOf<TerminalTxnsUnattended>(TerminalTxnsUnattended);
