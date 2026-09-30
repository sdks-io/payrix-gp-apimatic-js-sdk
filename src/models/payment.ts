import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { binSchema, type Bin } from "./bin.js";
import { paymentMethod2Schema, type PaymentMethod2 } from "./payment-method2.js";

export type Payment = {
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
  bin?: Bin;
  payment?: string;
  /** Times timestamp with last time payment was checked. */
  lastChecked?: number | null;
  last4?: string;
  mask?: string | null;
  plaidConsumerAccount?: string | null;
};

export const paymentSchema: Schema<Payment> = s.object<Payment>({
  id: s.optional(s.string()),
  method: s.optional(s.lazy(() => paymentMethod2Schema)),
  number: s.optional(s.string()),
  routing: s.optional(s.string()),
  bin: s.optional(s.lazy(() => binSchema)),
  payment: s.optional(s.string()),
  lastChecked: s.optionalNullable(s.number()),
  last4: s.optional(s.string()),
  mask: s.optionalNullable(s.string()),
  plaidConsumerAccount: s.optionalNullable(s.string()),
});
