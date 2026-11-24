import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  apmResponseSecondaryInternalSchema,
  apmResponseSecondarySchema,
  type ApmResponseSecondary,
} from "./apm-response-secondary.js";

export type ConfirmResponse = {
  paymentMethod?: ApmResponseSecondary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const confirmResponseProperties: s.Shape<ConfirmResponse> = {
  paymentMethod: s.optional(s.lazy(() => apmResponseSecondaryInternalSchema)),
  _keysMap: {
    paymentMethod: "payment_method",
  },
};

export const confirmResponseInternalSchema: Schema<ConfirmResponse> = s.object<ConfirmResponse>(
  confirmResponseProperties,
  { additionalProperties: s.json() },
);

export const confirmResponseSchema: Schema<ConfirmResponse> = s.lazySchema(() =>
  s.object<ConfirmResponse>(
    {
      ...confirmResponseProperties,
      paymentMethod: s.optional(s.lazy(() => apmResponseSecondarySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
