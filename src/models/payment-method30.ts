import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card17InternalSchema, card17Schema, type Card17 } from "./card17.js";

export type PaymentMethod30 = {
  /** First and last name on the card used. */
  name?: string;
  card?: Card17;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod30Properties: s.Shape<PaymentMethod30> = {
  name: s.optional(s.string()),
  card: s.optional(s.lazy(() => card17InternalSchema)),
};

export const paymentMethod30InternalSchema: Schema<PaymentMethod30> = s.object<PaymentMethod30>(
  paymentMethod30Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod30Schema: Schema<PaymentMethod30> = s.lazySchema(() =>
  s.object<PaymentMethod30>(
    {
      ...paymentMethod30Properties,
      name: s.optional(s.string().check(s.maxLength(50))),
      card: s.optional(s.lazy(() => card17Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
