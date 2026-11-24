import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemsSchema, type Items } from "./items.js";

export type Products2 = {
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
  items?: Items;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const products2Properties: s.Shape<Products2> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  quantity: s.optional(s.string()),
  items: s.optional(s.lazy(() => itemsSchema)),
};

export const products2InternalSchema: Schema<Products2> = s.object<Products2>(products2Properties, {
  additionalProperties: s.json(),
});

export const products2Schema: Schema<Products2> = s.lazySchema(() =>
  s.object<Products2>(
    {
      ...products2Properties,
      id: s.optional(s.string().check(s.minLength(5), s.maxLength(50))),
      quantity: s.optional(s.string().check(s.minLength(1), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
