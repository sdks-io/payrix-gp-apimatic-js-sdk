import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethodConfigurationSchema,
  type PaymentMethodConfiguration,
} from "./payment-method-configuration.js";
import {
  shippingAddress3InternalSchema,
  shippingAddress3Schema,
  type ShippingAddress3,
} from "./shipping-address3.js";
import { shippingPhoneInternalSchema, shippingPhoneSchema, type ShippingPhone } from "./shipping-phone.js";
import {
  transactionConfigurationInternalSchema,
  transactionConfigurationSchema,
  type TransactionConfiguration,
} from "./transaction-configuration.js";

export type Order73 = {
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency?: string;
  /** Merchant defined field to reference the order */
  reference?: string;
  transactionConfiguration?: TransactionConfiguration;
  paymentMethodConfiguration?: PaymentMethodConfiguration;
  shippingAddress?: ShippingAddress3;
  shippingPhone?: ShippingPhone;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order73Properties: s.Shape<Order73> = {
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  reference: s.optional(s.string()),
  transactionConfiguration: s.optional(s.lazy(() => transactionConfigurationInternalSchema)),
  paymentMethodConfiguration: s.optional(s.lazy(() => paymentMethodConfigurationSchema)),
  shippingAddress: s.optional(s.lazy(() => shippingAddress3InternalSchema)),
  shippingPhone: s.optional(s.lazy(() => shippingPhoneInternalSchema)),
  _keysMap: {
    transactionConfiguration: "transaction_configuration",
    paymentMethodConfiguration: "payment_method_configuration",
    shippingAddress: "shipping_address",
    shippingPhone: "shipping_phone",
  },
};

export const order73InternalSchema: Schema<Order73> = s.object<Order73>(order73Properties, {
  additionalProperties: s.json(),
});

export const order73Schema: Schema<Order73> = s.lazySchema(() =>
  s.object<Order73>(
    {
      ...order73Properties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      transactionConfiguration: s.optional(s.lazy(() => transactionConfigurationSchema)),
      shippingAddress: s.optional(s.lazy(() => shippingAddress3Schema)),
      shippingPhone: s.optional(s.lazy(() => shippingPhoneSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
