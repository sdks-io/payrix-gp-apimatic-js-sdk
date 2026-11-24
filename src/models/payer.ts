import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethod4InternalSchema,
  paymentMethod4Schema,
  type PaymentMethod4,
} from "./payment-method4.js";

export type Payer = {
  paymentMethod?: PaymentMethod4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payerProperties: s.Shape<Payer> = {
  paymentMethod: s.optional(s.lazy(() => paymentMethod4InternalSchema)),
  _keysMap: {
    paymentMethod: "payment_method",
  },
};

export const payerInternalSchema: Schema<Payer> = s.object<Payer>(payerProperties, {
  additionalProperties: s.json(),
});

export const payerSchema: Schema<Payer> = s.lazySchema(() =>
  s.object<Payer>(
    {
      ...payerProperties,
      paymentMethod: s.optional(s.lazy(() => paymentMethod4Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
