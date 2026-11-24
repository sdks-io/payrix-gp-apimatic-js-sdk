import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Products3 = {
  /** The quantity of the specified product ordered. */
  quantity?: number;
  /**
   * Unique Global Payments generated id used to uniquely reference a product on the Global Payments
   * system.
   */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const products3Properties: s.Shape<Products3> = {
  quantity: s.optional(s.float64()),
  id: s.optional(s.string()),
};

export const products3InternalSchema: Schema<Products3> = s.object<Products3>(products3Properties, {
  additionalProperties: s.json(),
});

export const products3Schema: Schema<Products3> = s.lazySchema(() =>
  s.object<Products3>(
    {
      ...products3Properties,
      id: s.optional(s.string().check(s.minLength(5), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
