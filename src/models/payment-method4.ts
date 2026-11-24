import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  schemaObjectsV1AddressInternalSchema,
  schemaObjectsV1AddressSchema,
  type SchemaObjectsV1Address,
} from "./schema-objects-v1-address.js";
import {
  schemaObjectsV1MerchantPaymentMethodCardInternalSchema,
  schemaObjectsV1MerchantPaymentMethodCardSchema,
  type SchemaObjectsV1MerchantPaymentMethodCard,
} from "./schema-objects-v1-merchant-payment-method-card.js";

export type PaymentMethod4 = {
  /** First and last name on the payment method used @default "John Smith" */
  name?: string;
  /** A label that further describes the payment method */
  reference?: string;
  card?: SchemaObjectsV1MerchantPaymentMethodCard;
  billingAddress?: SchemaObjectsV1Address;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod4Properties: s.Shape<PaymentMethod4> = {
  name: s.defaulted(s.string(), "John Smith"),
  reference: s.optional(s.string()),
  card: s.optional(s.lazy(() => schemaObjectsV1MerchantPaymentMethodCardInternalSchema)),
  billingAddress: s.optional(s.lazy(() => schemaObjectsV1AddressInternalSchema)),
  _keysMap: {
    billingAddress: "billing_address",
  },
};

export const paymentMethod4InternalSchema: Schema<PaymentMethod4> = s.object<PaymentMethod4>(
  paymentMethod4Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod4Schema: Schema<PaymentMethod4> = s.lazySchema(() =>
  s.object<PaymentMethod4>(
    {
      ...paymentMethod4Properties,
      name: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "John Smith"),
      card: s.optional(s.lazy(() => schemaObjectsV1MerchantPaymentMethodCardSchema)),
      billingAddress: s.optional(s.lazy(() => schemaObjectsV1AddressSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
