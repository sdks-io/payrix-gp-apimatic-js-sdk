import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Configurations = {
  /**
   * This is a unique identifier that ensures all merchants processing the same card can reference a
   * single, shared fingerprint. This shared value allows merchants or partners to consistently
   * recognize the same cardholder across different merchants or partners. It enables cross merchant
   * cardholder identification for reporting, matching, and any use case where multiple merchants
   * need to identify and match the same cardholder using a single fingerprint value.
   */
  fingerprintId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const configurationsProperties: s.Shape<Configurations> = {
  fingerprintId: s.optional(s.string()),
  _keysMap: {
    fingerprintId: "fingerprint_id",
  },
};

export const configurationsInternalSchema: Schema<Configurations> = s.object<Configurations>(
  configurationsProperties,
  { additionalProperties: s.json() },
);

export const configurationsSchema: Schema<Configurations> = s.lazySchema(() =>
  s.object<Configurations>(
    {
      ...configurationsProperties,
      fingerprintId: s.optional(s.string().check(s.minLength(1), s.maxLength(40))),
    },
    { additionalProperties: s.json() },
  ),
);
