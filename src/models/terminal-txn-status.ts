import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnStatus = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type TerminalTxnStatus = (typeof TerminalTxnStatus)[keyof typeof TerminalTxnStatus] | (number & {});

export const terminalTxnStatusSchema: EnumSchema<TerminalTxnStatus> =
  s.enumOf<TerminalTxnStatus>(TerminalTxnStatus);
