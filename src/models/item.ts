import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentTypeConsentsOrderItemsPaymentTypeSchema,
  type PaymentTypeConsentsOrderItemsPaymentType,
} from "./payment-type-consents-order-items-payment-type.js";
import { recurringInternalSchema, recurringSchema, type Recurring } from "./recurring.js";
import {
  typeConsentsOrderItemsTypeSchema,
  type TypeConsentsOrderItemsType,
} from "./type-consents-order-items-type.js";

export type Item = {
  /** A label / name asociated with the items being purchased. */
  label?: string;
  /** A reference for the group of items being purchased with the order. */
  reference?: string;
  /** Type of item */
  type?: TypeConsentsOrderItemsType;
  /** A total amount of a specific group of items being purchased with the order */
  amount: string;
  /** The quantity of a specific item being purchased */
  quantity?: string;
  /** A description of the group of items being purchased with the order. */
  description?: string;
  /** The payment type of the item purchased with order */
  paymentType?: PaymentTypeConsentsOrderItemsPaymentType;
  recurring?: Recurring;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const itemProperties: s.Shape<Item> = {
  label: s.optional(s.string()),
  reference: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeConsentsOrderItemsTypeSchema)),
  amount: s.string(),
  quantity: s.optional(s.string()),
  description: s.optional(s.string()),
  paymentType: s.optional(s.lazy(() => paymentTypeConsentsOrderItemsPaymentTypeSchema)),
  recurring: s.optional(s.lazy(() => recurringInternalSchema)),
  _keysMap: {
    paymentType: "payment_type",
  },
};

export const itemInternalSchema: Schema<Item> = s.object<Item>(itemProperties, {
  additionalProperties: s.json(),
});

export const itemSchema: Schema<Item> = s.lazySchema(() =>
  s.object<Item>(
    {
      ...itemProperties,
      label: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.string().check(s.minLength(1), s.maxLength(50)),
      quantity: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      recurring: s.optional(s.lazy(() => recurringSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
