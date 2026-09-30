import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsCvvStatus = {
  NotPresent: "notPresent",
  Illegible: "illegible",
  NotProvided: "notProvided",
} as const;
export type TerminalTxnsCvvStatus =
  | (typeof TerminalTxnsCvvStatus)[keyof typeof TerminalTxnsCvvStatus]
  | (string & {});

export const terminalTxnsCvvStatusSchema: EnumSchema<TerminalTxnsCvvStatus> =
  s.enumOf<TerminalTxnsCvvStatus>(TerminalTxnsCvvStatus);
