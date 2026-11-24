import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  DefaultPayersPaymentMethodsDefault,
  defaultPayersPaymentMethodsDefaultSchema,
} from "./default-payers-payment-methods-default.js";

export type PaymentMethods = {
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

const paymentMethodsProperties: s.Shape<PaymentMethods> = {
  id: s.optional(s.string()),
  default: s.defaulted(defaultPayersPaymentMethodsDefaultSchema, DefaultPayersPaymentMethodsDefault.No),
};

export const paymentMethodsInternalSchema: Schema<PaymentMethods> = s.object<PaymentMethods>(
  paymentMethodsProperties,
  { additionalProperties: s.json() },
);

export const paymentMethodsSchema: Schema<PaymentMethods> = s.lazySchema(() =>
  s.object<PaymentMethods>(
    {
      ...paymentMethodsProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
