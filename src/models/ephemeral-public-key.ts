import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EphemeralPublicKey = {
  /** Key type (typically EC) */
  kty?: string;
  /** Curve type (typically P-256) */
  crv?: string;
  /** The Base64 URL encoded X coordinate */
  x?: string;
  /** The Base64 URL encoded Y coordinate */
  y?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ephemeralPublicKeySchema: Schema<EphemeralPublicKey> = s.object<EphemeralPublicKey>(
  {
    kty: s.optional(s.string()),
    crv: s.optional(s.string()),
    x: s.optional(s.string()),
    y: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
