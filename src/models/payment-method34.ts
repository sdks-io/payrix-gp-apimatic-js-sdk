import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card31InternalSchema, card31Schema, type Card31 } from "./card31.js";

export type PaymentMethod34 = {
  /** Data relating to the card payment method. */
  card?: Card31;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod34Properties: s.Shape<PaymentMethod34> = {
  card: s.optional(s.lazy(() => card31InternalSchema)),
};

export const paymentMethod34InternalSchema: Schema<PaymentMethod34> = s.object<PaymentMethod34>(
  paymentMethod34Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod34Schema: Schema<PaymentMethod34> = s.lazySchema(() =>
  s.object<PaymentMethod34>(
    {
      ...paymentMethod34Properties,
      card: s.optional(s.lazy(() => card31Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
