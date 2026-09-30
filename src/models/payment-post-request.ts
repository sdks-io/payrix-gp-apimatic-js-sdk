import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethod2Schema, type PaymentMethod2 } from "./payment-method2.js";

export type PaymentPostRequest = {
  method?: PaymentMethod2;
  /**
   * For credit payment method, the card number of the credit card associated with this Transaction.
   * For eCheck payment method, the bank account number associated with this Transaction.
   */
  number?: string;
  last4?: string;
  /** The routing code for the eCheck or bank account payment associated with this Transaction. */
  routing?: string;
  bin?: string;
  payment?: string | null;
  /** Times timestamp with last time payment was checked. */
  lastChecked?: number | null;
  mask?: string | null;
  plaidConsumerAccount?: string | null;
};

export const paymentPostRequestSchema: Schema<PaymentPostRequest> = s.object<PaymentPostRequest>({
  method: s.optional(s.lazy(() => paymentMethod2Schema)),
  number: s.optional(s.string()),
  last4: s.optional(s.string()),
  routing: s.optional(s.string()),
  bin: s.optional(s.string()),
  payment: s.optionalNullable(s.string()),
  lastChecked: s.optionalNullable(s.number()),
  mask: s.optionalNullable(s.string()),
  plaidConsumerAccount: s.optionalNullable(s.string()),
});
