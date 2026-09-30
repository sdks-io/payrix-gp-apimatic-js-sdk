import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnMetadataType = {
  Amounts: "amounts",
  Emv: "emv",
  Network: "network",
  Timeout: "timeout",
  FirstTxn: "firstTxn",
  Discretionary: "discretionary",
} as const;
export type TerminalTxnMetadataType =
  | (typeof TerminalTxnMetadataType)[keyof typeof TerminalTxnMetadataType]
  | (string & {});

export const terminalTxnMetadataTypeSchema: EnumSchema<TerminalTxnMetadataType> =
  s.enumOf<TerminalTxnMetadataType>(TerminalTxnMetadataType);
