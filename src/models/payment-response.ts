import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethod2Schema, type PaymentMethod2 } from "./payment-method2.js";

export type PaymentResponse = {
  /** The ID of this resource. */
  id?: string;
  method?: PaymentMethod2;
  /**
   * For credit payment method, the card number of the credit card associated with this Transaction.
   * For eCheck payment method, the bank account number associated with this Transaction.
   */
  number?: string;
  /** The routing code for the eCheck or bank account payment associated with this Transaction. */
  routing?: string;
};

export const paymentResponseSchema: Schema<PaymentResponse> = s.object<PaymentResponse>({
  id: s.optional(s.string()),
  method: s.optional(s.lazy(() => paymentMethod2Schema)),
  number: s.optional(s.string()),
  routing: s.optional(s.string()),
});
