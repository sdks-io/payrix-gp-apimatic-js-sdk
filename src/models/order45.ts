import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taxisInternalSchema, taxisSchema, type Taxis } from "./taxis.js";

export type Order45 = {
  /** The merchant's reference for the order the transaction is associated with.. */
  reference?: string;
  /** The total shipping amount incurred for the order. */
  shippingAmount?: string;
  /** The total import or export duties amount included in the order. */
  dutyAmount?: string;
  taxes?: Taxis[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order45Properties: s.Shape<Order45> = {
  reference: s.optional(s.string()),
  shippingAmount: s.optional(s.string()),
  dutyAmount: s.optional(s.string()),
  taxes: s.optional(s.array(s.lazy(() => taxisInternalSchema))),
  _keysMap: {
    shippingAmount: "shipping_amount",
    dutyAmount: "duty_amount",
  },
};

export const order45InternalSchema: Schema<Order45> = s.object<Order45>(order45Properties, {
  additionalProperties: s.json(),
});

export const order45Schema: Schema<Order45> = s.lazySchema(() =>
  s.object<Order45>(
    {
      ...order45Properties,
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      shippingAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dutyAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxes: s.optional(s.array(s.lazy(() => taxisSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
