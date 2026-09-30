import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { txnPaymentMethod1Schema, type TxnPaymentMethod1 } from "./txn-payment-method1.js";

export type Payment4 = {
  method: TxnPaymentMethod1;
  /**
   * For credit payment method, the card number of the credit card associated with this Transaction.
   * For eCheck payment method, the bank account number associated with this Transaction.
   */
  number: string;
  /** The routing code for the eCheck or bank account payment associated with this Transaction. */
  routing?: string;
  /**
   * The expiration date of the credit card associated with this Transaction. This field is stored
   * as a text string in 'MMYY' format, where 'MM' is the number of a month and 'YY' is the last two
   * digits of a year. For example, '0623' for June 2023.
   */
  expiration?: string;
  /**
   * The Card Verification Value (CVV) number of the credit card associated with this Transaction.
   * This field is expressed as an integer.
   *
   * @default "0"
   */
  cvv?: string;
  /**
   * The 'Track' data (either Track 1, Track 2, or both) of the card associated with this
   * Transaction. This field is stored as a text string.
   */
  track?: Record<string, unknown>;
};

export const payment4Schema: Schema<Payment4> = s.object<Payment4>({
  method: txnPaymentMethod1Schema,
  number: s.string(),
  routing: s.optional(s.string()),
  expiration: s.optional(s.string()),
  cvv: s.defaulted(s.string(), "0"),
  track: s.optional(s.record(s.string(), s.unknown())),
});
