import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes the receipts a device prints when processing a transaction. */
export const PrintReceiptModeTransactionsDevicePrintReceiptMode = {
  None: "NONE",
  Payer: "PAYER",
  Merchant: "MERCHANT",
  Both: "BOTH",
} as const;
export type PrintReceiptModeTransactionsDevicePrintReceiptMode =
  | (typeof PrintReceiptModeTransactionsDevicePrintReceiptMode)[keyof typeof PrintReceiptModeTransactionsDevicePrintReceiptMode]
  | (string & {});

export const printReceiptModeTransactionsDevicePrintReceiptModeSchema: EnumSchema<PrintReceiptModeTransactionsDevicePrintReceiptMode> =
  s.enumOf<PrintReceiptModeTransactionsDevicePrintReceiptMode>(
    PrintReceiptModeTransactionsDevicePrintReceiptMode,
  );
