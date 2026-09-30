import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsTerminalCapability = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type TerminalTxnsTerminalCapability =
  | (typeof TerminalTxnsTerminalCapability)[keyof typeof TerminalTxnsTerminalCapability]
  | (number & {});

export const terminalTxnsTerminalCapabilitySchema: EnumSchema<TerminalTxnsTerminalCapability> =
  s.enumOf<TerminalTxnsTerminalCapability>(TerminalTxnsTerminalCapability);
