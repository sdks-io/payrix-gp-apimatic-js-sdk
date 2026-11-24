import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The result codes directly from the card issuer. */
export type CardProvider = {
  /** Result code from the card provider (issuer) . */
  result?: string;
  /** Message from the card provider (issuer). */
  message?: string;
  /** CVV result code from the card provider (issuer) . */
  cvvResult?: string;
  /** AVS result code from the card provider (issuer) . */
  avsResult?: string;
  /** AVS Address result code from the card provider (issuer) . */
  avsAddressResult?: string;
  /** AVS Postal result code from the card provider (issuer) . */
  avsPostalCodeResult?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardProviderProperties: s.Shape<CardProvider> = {
  result: s.optional(s.string()),
  message: s.optional(s.string()),
  cvvResult: s.optional(s.string()),
  avsResult: s.optional(s.string()),
  avsAddressResult: s.optional(s.string()),
  avsPostalCodeResult: s.optional(s.string()),
  _keysMap: {
    cvvResult: "cvv_result",
    avsResult: "avs_result",
    avsAddressResult: "avs_address_result",
    avsPostalCodeResult: "avs_postal_code_result",
  },
};

export const cardProviderInternalSchema: Schema<CardProvider> = s.object<CardProvider>(
  cardProviderProperties,
  { additionalProperties: s.json() },
);

export const cardProviderSchema: Schema<CardProvider> = s.lazySchema(() =>
  s.object<CardProvider>(
    {
      ...cardProviderProperties,
      result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      message: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      cvvResult: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      avsResult: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      avsAddressResult: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      avsPostalCodeResult: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
