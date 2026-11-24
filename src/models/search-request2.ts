import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card29InternalSchema, card29Schema, type Card29 } from "./card29.js";

export type SearchRequest2 = {
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  card?: Card29;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchRequest2Properties: s.Shape<SearchRequest2> = {
  accountName: s.optional(s.string()),
  card: s.optional(s.lazy(() => card29InternalSchema)),
  _keysMap: {
    accountName: "account_name",
  },
};

export const searchRequest2InternalSchema: Schema<SearchRequest2> = s.object<SearchRequest2>(
  searchRequest2Properties,
  { additionalProperties: s.json() },
);

export const searchRequest2Schema: Schema<SearchRequest2> = s.lazySchema(() =>
  s.object<SearchRequest2>(
    {
      ...searchRequest2Properties,
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      card: s.optional(s.lazy(() => card29Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
