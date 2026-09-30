import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnType = {
  _1: 1,
  _2: 2,
  _4: 4,
  _5: 5,
  _13: 13,
} as const;
export type TerminalTxnType = (typeof TerminalTxnType)[keyof typeof TerminalTxnType] | (number & {});

export const terminalTxnTypeSchema: EnumSchema<TerminalTxnType> = s.enumOf<TerminalTxnType>(TerminalTxnType);
