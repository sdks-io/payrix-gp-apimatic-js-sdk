import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card49InternalSchema, card49Schema, type Card49 } from "./card49.js";

export type PaymentMethod46 = {
  card?: Card49;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod46Properties: s.Shape<PaymentMethod46> = {
  card: s.optional(s.lazy(() => card49InternalSchema)),
};

export const paymentMethod46InternalSchema: Schema<PaymentMethod46> = s.object<PaymentMethod46>(
  paymentMethod46Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod46Schema: Schema<PaymentMethod46> = s.lazySchema(() =>
  s.object<PaymentMethod46>(
    {
      ...paymentMethod46Properties,
      card: s.optional(s.lazy(() => card49Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
