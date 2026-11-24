import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card13 = {
  /** The the card account number used to authorize the transaction. Also known as PAN. */
  number?: string;
  /** The 2 digit expiry date month of the card. */
  expiryMonth?: string;
  /** The 2 digit expiry date year of the card. */
  expiryYear?: string;
  /** Data from magnetic stripe of a card. */
  track?: string;
  /** The full card tag data for an EMV/chip card transaction. */
  tag?: string;
  /** The network token,provided by the brands as a more secure alternative to the card number. */
  networkToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card13Properties: s.Shape<Card13> = {
  number: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  track: s.optional(s.string()),
  tag: s.optional(s.string()),
  networkToken: s.optional(s.string()),
  _keysMap: {
    expiryMonth: "expiry_month",
    expiryYear: "expiry_year",
    networkToken: "network_token",
  },
};

export const card13InternalSchema: Schema<Card13> = s.object<Card13>(card13Properties, {
  additionalProperties: s.json(),
});

export const card13Schema: Schema<Card13> = s.lazySchema(() =>
  s.object<Card13>(
    {
      ...card13Properties,
      number: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryMonth: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      expiryYear: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      track: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      tag: s.optional(s.string().check(s.minLength(1), s.maxLength(500))),
    },
    { additionalProperties: s.json() },
  ),
);
