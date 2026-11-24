import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethodSecondaryApmFieldsInternalSchema,
  paymentMethodSecondaryApmFieldsSchema,
  type PaymentMethodSecondaryApmFields,
} from "./payment-method-secondary-apm-fields.js";

export type PaymentMethodSecondaryApm = {
  /** Data associated with an APM. */
  apm?: PaymentMethodSecondaryApmFields;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodSecondaryApmProperties: s.Shape<PaymentMethodSecondaryApm> = {
  apm: s.optional(s.lazy(() => paymentMethodSecondaryApmFieldsInternalSchema)),
};

export const paymentMethodSecondaryApmInternalSchema: Schema<PaymentMethodSecondaryApm> =
  s.object<PaymentMethodSecondaryApm>(paymentMethodSecondaryApmProperties, {
    additionalProperties: s.json(),
  });

export const paymentMethodSecondaryApmSchema: Schema<PaymentMethodSecondaryApm> = s.lazySchema(() =>
  s.object<PaymentMethodSecondaryApm>(
    {
      ...paymentMethodSecondaryApmProperties,
      apm: s.optional(s.lazy(() => paymentMethodSecondaryApmFieldsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
