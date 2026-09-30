import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of bank issuer number (BIN) that allows for resulting transactions.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `CREDIT` - **Credit BIN Type.**
 * - `DEBIT` - **Debit BIN Type.**
 * - `PREPAID` - **Prepaid BIN Type.**
 *
 * </details>
 */
export const TerminalTxnsBinType1 = {
  Credit: "CREDIT",
  Debit: "DEBIT",
  Prepaid: "PREPAID",
} as const;
export type TerminalTxnsBinType1 =
  | (typeof TerminalTxnsBinType1)[keyof typeof TerminalTxnsBinType1]
  | (string & {});

export const terminalTxnsBinType1Schema: EnumSchema<TerminalTxnsBinType1> =
  s.enumOf<TerminalTxnsBinType1>(TerminalTxnsBinType1);
