import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Product = {
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

const productProperties: s.Shape<Product> = {
  quantity: s.optional(s.float64()),
  id: s.optional(s.string()),
};

export const productInternalSchema: Schema<Product> = s.object<Product>(productProperties, {
  additionalProperties: s.json(),
});

export const productSchema: Schema<Product> = s.lazySchema(() =>
  s.object<Product>(
    {
      ...productProperties,
      id: s.optional(s.string().check(s.minLength(5), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
