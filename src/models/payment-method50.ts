import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentMethod50 = {
  /**
   * The result code associated with the payment method used to process this transaction. It is
   * returned from another system used to process the payment method.
   */
  result?: string;
  /** The result message that better explains the result code. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod50Properties: s.Shape<PaymentMethod50> = {
  result: s.optional(s.string()),
  message: s.optional(s.string()),
};

export const paymentMethod50InternalSchema: Schema<PaymentMethod50> = s.object<PaymentMethod50>(
  paymentMethod50Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod50Schema: Schema<PaymentMethod50> = s.lazySchema(() =>
  s.object<PaymentMethod50>(
    {
      ...paymentMethod50Properties,
      result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
