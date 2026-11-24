import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Filter24 = {
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country?: string;
  /** The base currency of the merchant in ISO-4217(alpha-3). */
  merchantCurrency?: string;
  /** The currency or list of currencies that the merchant accepts in ISO-4217(alpha-3). */
  payerCurrency?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const filter24Properties: s.Shape<Filter24> = {
  country: s.optional(s.string()),
  merchantCurrency: s.optional(s.string()),
  payerCurrency: s.optional(s.array(s.string())),
  _keysMap: {
    merchantCurrency: "merchant_currency",
    payerCurrency: "payer_currency",
  },
};

export const filter24InternalSchema: Schema<Filter24> = s.object<Filter24>(filter24Properties, {
  additionalProperties: s.json(),
});

export const filter24Schema: Schema<Filter24> = s.lazySchema(() =>
  s.object<Filter24>(
    {
      ...filter24Properties,
      country: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
