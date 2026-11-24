import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DigitalWallet8 = {
  /** Identifies the digital wallet provider to the payer. */
  provider?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const digitalWallet8Properties: s.Shape<DigitalWallet8> = {
  provider: s.optional(s.string()),
};

export const digitalWallet8InternalSchema: Schema<DigitalWallet8> = s.object<DigitalWallet8>(
  digitalWallet8Properties,
  { additionalProperties: s.json() },
);

export const digitalWallet8Schema: Schema<DigitalWallet8> = s.lazySchema(() =>
  s.object<DigitalWallet8>(
    {
      ...digitalWallet8Properties,
      provider: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
