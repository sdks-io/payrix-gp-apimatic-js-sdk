import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Filter11 = {
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /** The card account number used to authorize the transaction. Also known as PAN or FPAN. */
  number?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const filter11Properties: s.Shape<Filter11> = {
  accountName: s.optional(s.string()),
  number: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  _keysMap: {
    accountName: "account_name",
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
  },
};

export const filter11InternalSchema: Schema<Filter11> = s.object<Filter11>(filter11Properties, {
  additionalProperties: s.json(),
});

export const filter11Schema: Schema<Filter11> = s.lazySchema(() =>
  s.object<Filter11>(
    {
      ...filter11Properties,
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      number: s.optional(s.string().check(s.minLength(12), s.maxLength(19))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
