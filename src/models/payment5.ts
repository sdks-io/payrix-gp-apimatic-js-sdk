import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalTxnPaymentMethod1Schema,
  type TerminalTxnPaymentMethod1,
} from "./terminal-txn-payment-method1.js";

export type Payment5 = {
  method?: TerminalTxnPaymentMethod1;
  /** The last four numbers of the credit card associated with this Transaction. */
  number?: string;
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
   */
  cvv?: number;
  /**
   * The 'Track' data (either Track 1, Track 2, or both) of the card associated with this
   * Transaction. This field is stored as a text string.
   */
  track?: string;
};

export const payment5Schema: Schema<Payment5> = s.object<Payment5>({
  method: s.optional(s.lazy(() => terminalTxnPaymentMethod1Schema)),
  number: s.optional(s.string()),
  routing: s.optional(s.string()),
  expiration: s.optional(s.string()),
  cvv: s.optional(s.number()),
  track: s.optional(s.string()),
});
