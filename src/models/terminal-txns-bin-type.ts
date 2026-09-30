import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsBinType = {
  Credit: "CREDIT",
  Debit: "DEBIT",
  Prepaid: "PREPAID",
} as const;
export type TerminalTxnsBinType =
  | (typeof TerminalTxnsBinType)[keyof typeof TerminalTxnsBinType]
  | (string & {});

export const terminalTxnsBinTypeSchema: EnumSchema<TerminalTxnsBinType> =
  s.enumOf<TerminalTxnsBinType>(TerminalTxnsBinType);
