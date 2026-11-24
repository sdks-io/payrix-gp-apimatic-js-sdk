import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card22 = {
  /** This is the cryptogram that is needed to process a CIT Network Tokenization request */
  cryptogram?: string;
  /** This is the cryptogram expiry month */
  cryptogramExpiryMonth?: string;
  /** This is the cryptogram expiry year */
  cryptogramExpiryYear?: string;
  /**
   * This is the cryptogram eci that is needed to process a CIT Network Tokenization request with
   * 3DSecure
   */
  eci?: string;
  /** Masked network token but last 4 digits of the network token are visible. */
  maskedNetworkTokenLast4?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card22Properties: s.Shape<Card22> = {
  cryptogram: s.optional(s.string()),
  cryptogramExpiryMonth: s.optional(s.string()),
  cryptogramExpiryYear: s.optional(s.string()),
  eci: s.optional(s.string()),
  maskedNetworkTokenLast4: s.optional(s.string()),
  _keysMap: {
    cryptogramExpiryMonth: "cryptogram_expiry_month",
    cryptogramExpiryYear: "cryptogram_expiry_year",
    maskedNetworkTokenLast4: "masked_network_token_last4",
  },
};

export const card22InternalSchema: Schema<Card22> = s.object<Card22>(card22Properties, {
  additionalProperties: s.json(),
});

export const card22Schema: Schema<Card22> = s.lazySchema(() =>
  s.object<Card22>(
    {
      ...card22Properties,
      maskedNetworkTokenLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
