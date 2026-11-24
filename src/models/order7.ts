import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Order7 = {
  /** The total amount of the order across all items being purchased and all charges. */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency?: string;
  /** The total tax amount associated with the order. */
  taxAmount?: string;
  /**
   * The total amount of the order across all items being purchased exclusive of charges separate to
   * the items being bought.
   */
  itemAmount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order7Properties: s.Shape<Order7> = {
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  taxAmount: s.optional(s.string()),
  itemAmount: s.optional(s.string()),
  _keysMap: {
    taxAmount: "tax_amount",
    itemAmount: "item_amount",
  },
};

export const order7InternalSchema: Schema<Order7> = s.object<Order7>(order7Properties, {
  additionalProperties: s.json(),
});

export const order7Schema: Schema<Order7> = s.lazySchema(() =>
  s.object<Order7>(
    {
      ...order7Properties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      itemAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
