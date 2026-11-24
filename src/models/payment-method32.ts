import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  DefaultPayersPaymentMethodsDefault,
  defaultPayersPaymentMethodsDefaultSchema,
} from "./default-payers-payment-methods-default.js";

export type PaymentMethod32 = {
  /** Unique identifier for the Payment method on the platform. */
  id?: string;
  /**
   * A flag used to identify whether the Payment method should be used as the default Payment Method
   * for the Payer
   *
   * @default DefaultPayersPaymentMethodsDefault.No
   */
  default?: DefaultPayersPaymentMethodsDefault;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod32Properties: s.Shape<PaymentMethod32> = {
  id: s.optional(s.string()),
  default: s.defaulted(defaultPayersPaymentMethodsDefaultSchema, DefaultPayersPaymentMethodsDefault.No),
};

export const paymentMethod32InternalSchema: Schema<PaymentMethod32> = s.object<PaymentMethod32>(
  paymentMethod32Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod32Schema: Schema<PaymentMethod32> = s.lazySchema(() =>
  s.object<PaymentMethod32>(
    {
      ...paymentMethod32Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
