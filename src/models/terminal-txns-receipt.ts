import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsReceipt = {
  NoReceipt: "noReceipt",
  Merchant: "merchant",
  Customer: "customer",
  Both: "both",
} as const;
export type TerminalTxnsReceipt =
  | (typeof TerminalTxnsReceipt)[keyof typeof TerminalTxnsReceipt]
  | (string & {});

export const terminalTxnsReceiptSchema: EnumSchema<TerminalTxnsReceipt> =
  s.enumOf<TerminalTxnsReceipt>(TerminalTxnsReceipt);
