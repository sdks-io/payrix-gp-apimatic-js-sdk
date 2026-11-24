import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address3InternalSchema, address3Schema, type Address3 } from "./address3.js";

export type Card15 = {
  /** The the card account number used to authorize the transaction. Also known as PAN. */
  number?: string;
  /** The 2 digit expiry date month of the card */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card */
  expiryYear?: string;
  /** The numeric value printed on the physical card. */
  cvv?: string;
  address?: Address3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card15Properties: s.Shape<Card15> = {
  number: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  cvv: s.optional(s.string()),
  address: s.optional(s.lazy(() => address3InternalSchema)),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
  },
};

export const card15InternalSchema: Schema<Card15> = s.object<Card15>(card15Properties, {
  additionalProperties: s.json(),
});

export const card15Schema: Schema<Card15> = s.lazySchema(() =>
  s.object<Card15>(
    {
      ...card15Properties,
      number: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      expiryYear: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      address: s.optional(s.lazy(() => address3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
