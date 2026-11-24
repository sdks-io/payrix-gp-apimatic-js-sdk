import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card21InternalSchema, card21Schema, type Card21 } from "./card21.js";
import {
  statusPaymentMethodsStatusSchema,
  type StatusPaymentMethodsStatus,
} from "./status-payment-methods-status.js";

export type PaymentMethods2 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /** Global Payments time indicating when the object was created in ISO-8601 format */
  timeCreated?: Date;
  /**
   * The overall status of the payment method.
   * * `ACTIVE` - The entity is ACTIVE and can be used.
   * * `INACTIVE` - The entity is INACTIVE and cannot be used."
   * * `DELETED` - The status is DELETED. Once returned in an action response for a resource. The
   *   resource has been removed from the platform.
   */
  status?: StatusPaymentMethodsStatus;
  /** Merchant defined field to uniquely reference the stored payment method. */
  reference?: string;
  card?: Card21;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethods2Properties: s.Shape<PaymentMethods2> = {
  id: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => statusPaymentMethodsStatusSchema)),
  reference: s.optional(s.string()),
  card: s.optional(s.lazy(() => card21InternalSchema)),
  _keysMap: {
    timeCreated: "time_created",
  },
};

export const paymentMethods2InternalSchema: Schema<PaymentMethods2> = s.object<PaymentMethods2>(
  paymentMethods2Properties,
  { additionalProperties: s.json() },
);

export const paymentMethods2Schema: Schema<PaymentMethods2> = s.lazySchema(() =>
  s.object<PaymentMethods2>(
    {
      ...paymentMethods2Properties,
      id: s.optional(s.string().check(s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      card: s.optional(s.lazy(() => card21Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
