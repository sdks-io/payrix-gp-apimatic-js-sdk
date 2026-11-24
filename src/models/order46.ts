import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taxis1InternalSchema, taxis1Schema, type Taxis1 } from "./taxis1.js";

export type Order46 = {
  /** The total shipping amount incurred for the order. */
  shippingAmount?: string;
  /** The total import or export duties amount included in the order. */
  dutyAmount?: string;
  taxes?: Taxis1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order46Properties: s.Shape<Order46> = {
  shippingAmount: s.optional(s.string()),
  dutyAmount: s.optional(s.string()),
  taxes: s.optional(s.array(s.lazy(() => taxis1InternalSchema))),
  _keysMap: {
    shippingAmount: "shipping_amount",
    dutyAmount: "duty_amount",
  },
};

export const order46InternalSchema: Schema<Order46> = s.object<Order46>(order46Properties, {
  additionalProperties: s.json(),
});

export const order46Schema: Schema<Order46> = s.lazySchema(() =>
  s.object<Order46>(
    {
      ...order46Properties,
      shippingAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dutyAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxes: s.optional(s.array(s.lazy(() => taxis1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
