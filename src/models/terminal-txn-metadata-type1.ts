import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of metadata associated with the Terminal transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `amounts` - **Transaction Amounts**
 * - `emv` - **EuroPay, Mastercard, Visa Transactions**
 * - `network` - **Network Transactions**
 * - `timeout` - **Transaction Timeouts**
 * - `firstTxn` - **First Transaction**
 * - `discretionary` - **Custom Transaction Field Value**
 *
 * </details>
 */
export const TerminalTxnMetadataType1 = {
  Amounts: "amounts",
  Emv: "emv",
  Network: "network",
  Timeout: "timeout",
  FirstTxn: "firstTxn",
  Discretionary: "discretionary",
} as const;
export type TerminalTxnMetadataType1 =
  | (typeof TerminalTxnMetadataType1)[keyof typeof TerminalTxnMetadataType1]
  | (string & {});

export const terminalTxnMetadataType1Schema: EnumSchema<TerminalTxnMetadataType1> =
  s.enumOf<TerminalTxnMetadataType1>(TerminalTxnMetadataType1);
