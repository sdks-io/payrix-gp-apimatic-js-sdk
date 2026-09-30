import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsEmv = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsEmv = (typeof TerminalTxnsEmv)[keyof typeof TerminalTxnsEmv] | (number & {});

export const terminalTxnsEmvSchema: EnumSchema<TerminalTxnsEmv> = s.enumOf<TerminalTxnsEmv>(TerminalTxnsEmv);
