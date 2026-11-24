import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Transaction4 = {
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transaction4Properties: s.Shape<Transaction4> = {
  amount: s.string(),
};

export const transaction4InternalSchema: Schema<Transaction4> = s.object<Transaction4>(
  transaction4Properties,
  { additionalProperties: s.json() },
);

export const transaction4Schema: Schema<Transaction4> = s.lazySchema(() =>
  s.object<Transaction4>(
    {
      ...transaction4Properties,
      amount: s.string().check(s.minLength(1), s.maxLength(50)),
    },
    { additionalProperties: s.json() },
  ),
);
