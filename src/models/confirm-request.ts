import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethodSecondaryApmInternalSchema,
  paymentMethodSecondaryApmSchema,
  type PaymentMethodSecondaryApm,
} from "./payment-method-secondary-apm.js";

export type ConfirmRequest = {
  paymentMethod?: PaymentMethodSecondaryApm;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const confirmRequestProperties: s.Shape<ConfirmRequest> = {
  paymentMethod: s.optional(s.lazy(() => paymentMethodSecondaryApmInternalSchema)),
  _keysMap: {
    paymentMethod: "payment_method",
  },
};

export const confirmRequestInternalSchema: Schema<ConfirmRequest> = s.object<ConfirmRequest>(
  confirmRequestProperties,
  { additionalProperties: s.json() },
);

export const confirmRequestSchema: Schema<ConfirmRequest> = s.lazySchema(() =>
  s.object<ConfirmRequest>(
    {
      ...confirmRequestProperties,
      paymentMethod: s.optional(s.lazy(() => paymentMethodSecondaryApmSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
