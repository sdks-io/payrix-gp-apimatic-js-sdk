import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalStatus = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalStatus = (typeof TerminalStatus)[keyof typeof TerminalStatus] | (number & {});

export const terminalStatusSchema: EnumSchema<TerminalStatus> = s.enumOf<TerminalStatus>(TerminalStatus);
