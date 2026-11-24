import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Transaction5 = {
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transaction5Properties: s.Shape<Transaction5> = {
  amount: s.optional(s.string()),
};

export const transaction5InternalSchema: Schema<Transaction5> = s.object<Transaction5>(
  transaction5Properties,
  { additionalProperties: s.json() },
);

export const transaction5Schema: Schema<Transaction5> = s.lazySchema(() =>
  s.object<Transaction5>(
    {
      ...transaction5Properties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
