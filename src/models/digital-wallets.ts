import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { provider48Schema, type Provider48 } from "./provider48.js";

export type DigitalWallets = {
  /** This field is used to enable/disable Google Pay, Apple Pay, Click to Pay button on HPP. */
  provider?: Provider48[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const digitalWalletsSchema: Schema<DigitalWallets> = s.object<DigitalWallets>(
  {
    provider: s.optional(s.array(s.lazy(() => provider48Schema))),
  },
  { additionalProperties: s.json() },
);
