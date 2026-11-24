import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action48Schema, type Action48 } from "./action48.js";
import {
  statusPaymentMethodsStatusSchema,
  type StatusPaymentMethodsStatus,
} from "./status-payment-methods-status.js";

export type PaymentMethodsResponse = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /**
   * The overall status of the payment method.
   * * `ACTIVE` - The entity is ACTIVE and can be used.
   * * `INACTIVE` - The entity is INACTIVE and cannot be used."
   * * `DELETED` - The status is DELETED. Once returned in an action response for a resource. The
   *   resource has been removed from the platform.
   */
  status?: StatusPaymentMethodsStatus;
  action?: Action48;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodsResponseProperties: s.Shape<PaymentMethodsResponse> = {
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusPaymentMethodsStatusSchema)),
  action: s.optional(s.lazy(() => action48Schema)),
};

export const paymentMethodsResponseInternalSchema: Schema<PaymentMethodsResponse> =
  s.object<PaymentMethodsResponse>(paymentMethodsResponseProperties, { additionalProperties: s.json() });

export const paymentMethodsResponseSchema: Schema<PaymentMethodsResponse> = s.lazySchema(() =>
  s.object<PaymentMethodsResponse>(
    {
      ...paymentMethodsResponseProperties,
      id: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
