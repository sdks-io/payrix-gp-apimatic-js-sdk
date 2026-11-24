import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Products1 = {
  /** Unique platform generated id used to uniquely reference a product on the platform. */
  id?: string;
  /**
   * Unique Global Payments generated name used to uniquely reference a product on the Global
   * Payments system.
   */
  name?: string;
  /**
   * The quantity of the specified product ordered. Currently the quantity is limited to 1 per
   * order.
   */
  quantity?: string;
  /** The name of the device being reuested */
  manufacturerModel?: string;
  /** Amount or cost associated with the product */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const products1Properties: s.Shape<Products1> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  quantity: s.optional(s.string()),
  manufacturerModel: s.optional(s.string()),
  amount: s.optional(s.string()),
  _keysMap: {
    manufacturerModel: "manufacturer_model",
  },
};

export const products1InternalSchema: Schema<Products1> = s.object<Products1>(products1Properties, {
  additionalProperties: s.json(),
});

export const products1Schema: Schema<Products1> = s.lazySchema(() =>
  s.object<Products1>(
    {
      ...products1Properties,
      id: s.optional(s.string().check(s.minLength(5), s.maxLength(50))),
      quantity: s.optional(s.string().check(s.minLength(1), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
