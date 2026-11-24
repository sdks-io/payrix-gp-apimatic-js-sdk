import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card23 = {
  /** The network token, provided by the brands as a more secure alternative to the card number. */
  networkToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const card23Schema: Schema<Card23> = s.object<Card23>(
  {
    networkToken: s.string(),
    _keysMap: {
      networkToken: "network_token",
    },
  },
  { additionalProperties: s.json() },
);
