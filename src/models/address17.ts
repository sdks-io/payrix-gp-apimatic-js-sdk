import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Address17 = {
  /**
   * Merchant's street address, including street number, street name, and location identifiers
   * (e.g., building or unit number).
   */
  line1?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const address17Properties: s.Shape<Address17> = {
  line1: s.optional(s.string()),
  _keysMap: {
    line1: "line_1",
  },
};

export const address17InternalSchema: Schema<Address17> = s.object<Address17>(address17Properties, {
  additionalProperties: s.json(),
});

export const address17Schema: Schema<Address17> = s.lazySchema(() =>
  s.object<Address17>(
    {
      ...address17Properties,
      line1: s.optional(s.string().check(s.minLength(1), s.maxLength(25))),
    },
    { additionalProperties: s.json() },
  ),
);
