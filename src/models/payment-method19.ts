import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card12InternalSchema, card12Schema, type Card12 } from "./card12.js";

export type PaymentMethod19 = {
  /**
   * This is a two-digit code used to identify the method to accept the cardholders payment details.
   */
  entryModeCode?: string;
  card?: Card12;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod19Properties: s.Shape<PaymentMethod19> = {
  entryModeCode: s.optional(s.string()),
  card: s.optional(s.lazy(() => card12InternalSchema)),
  _keysMap: {
    entryModeCode: "entry_mode_code",
  },
};

export const paymentMethod19InternalSchema: Schema<PaymentMethod19> = s.object<PaymentMethod19>(
  paymentMethod19Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod19Schema: Schema<PaymentMethod19> = s.lazySchema(() =>
  s.object<PaymentMethod19>(
    {
      ...paymentMethod19Properties,
      card: s.optional(s.lazy(() => card12Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
