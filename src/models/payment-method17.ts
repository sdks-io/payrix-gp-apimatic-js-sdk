import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card10InternalSchema, card10Schema, type Card10 } from "./card10.js";

export type PaymentMethod17 = {
  card?: Card10;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod17Properties: s.Shape<PaymentMethod17> = {
  card: s.optional(s.lazy(() => card10InternalSchema)),
};

export const paymentMethod17InternalSchema: Schema<PaymentMethod17> = s.object<PaymentMethod17>(
  paymentMethod17Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod17Schema: Schema<PaymentMethod17> = s.lazySchema(() =>
  s.object<PaymentMethod17>(
    {
      ...paymentMethod17Properties,
      card: s.optional(s.lazy(() => card10Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
