import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  transactionConfiguration1InternalSchema,
  transactionConfiguration1Schema,
  type TransactionConfiguration1,
} from "./transaction-configuration1.js";

export type Order72 = {
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency?: string;
  /** Merchant defined field to reference the order */
  reference?: string;
  transactionConfiguration?: TransactionConfiguration1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order72Properties: s.Shape<Order72> = {
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  reference: s.optional(s.string()),
  transactionConfiguration: s.optional(s.lazy(() => transactionConfiguration1InternalSchema)),
  _keysMap: {
    transactionConfiguration: "transaction_configuration",
  },
};

export const order72InternalSchema: Schema<Order72> = s.object<Order72>(order72Properties, {
  additionalProperties: s.json(),
});

export const order72Schema: Schema<Order72> = s.lazySchema(() =>
  s.object<Order72>(
    {
      ...order72Properties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      transactionConfiguration: s.optional(s.lazy(() => transactionConfiguration1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
