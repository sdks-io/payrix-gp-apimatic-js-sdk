import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A list of percentage mark ups on any currency conversion services for this transaction. */
export type TransactionFeesMarkUp = {
  /** The markup percentage charged for DCC, Dynamic Currency Conversion. */
  dccPercentage?: string;
  /** The markup percentage charged for Multi-Currency processing. */
  multicurrencyPercentage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionFeesMarkUpProperties: s.Shape<TransactionFeesMarkUp> = {
  dccPercentage: s.optional(s.string()),
  multicurrencyPercentage: s.optional(s.string()),
  _keysMap: {
    dccPercentage: "dcc_percentage",
    multicurrencyPercentage: "multicurrency_percentage",
  },
};

export const transactionFeesMarkUpInternalSchema: Schema<TransactionFeesMarkUp> =
  s.object<TransactionFeesMarkUp>(transactionFeesMarkUpProperties, { additionalProperties: s.json() });

export const transactionFeesMarkUpSchema: Schema<TransactionFeesMarkUp> = s.lazySchema(() =>
  s.object<TransactionFeesMarkUp>(
    {
      ...transactionFeesMarkUpProperties,
      dccPercentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      multicurrencyPercentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
