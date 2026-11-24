import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  deliveryTimeframeConsentsOrderDeliveryTimeframeSchema,
  type DeliveryTimeframeConsentsOrderDeliveryTimeframe,
} from "./delivery-timeframe-consents-order-delivery-timeframe.js";
import { item1InternalSchema, item1Schema, type Item1 } from "./item1.js";
import {
  shippingTypeConsentsOrderShippingTypeSchema,
  type ShippingTypeConsentsOrderShippingType,
} from "./shipping-type-consents-order-shipping-type.js";

export type Order11 = {
  /** The merchant's reference for the order the transaction is associated with. */
  reference?: string;
  /** Shipping method for the product. */
  deliveryTimeframe?: DeliveryTimeframeConsentsOrderDeliveryTimeframe;
  /** Indicates how the merchandise will be shipped to the customer. */
  shippingType?: ShippingTypeConsentsOrderShippingType;
  /** Shipping Cost of the order. */
  shippingCost?: string;
  /** The total amount of the order across all items being purchased and all charges. */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency?: string;
  /** The total tax amount associated with the order. */
  taxAmount?: string;
  /**
   * The total amount of the order across all items being purchased exclusive of charges separate to
   * the items being bought.
   */
  itemAmount?: string;
  items?: Item1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order11Properties: s.Shape<Order11> = {
  reference: s.optional(s.string()),
  deliveryTimeframe: s.optional(s.lazy(() => deliveryTimeframeConsentsOrderDeliveryTimeframeSchema)),
  shippingType: s.optional(s.lazy(() => shippingTypeConsentsOrderShippingTypeSchema)),
  shippingCost: s.optional(s.string()),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  taxAmount: s.optional(s.string()),
  itemAmount: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => item1InternalSchema))),
  _keysMap: {
    deliveryTimeframe: "delivery_timeframe",
    shippingType: "shipping_type",
    shippingCost: "shipping_cost",
    taxAmount: "tax_amount",
    itemAmount: "item_amount",
  },
};

export const order11InternalSchema: Schema<Order11> = s.object<Order11>(order11Properties, {
  additionalProperties: s.json(),
});

export const order11Schema: Schema<Order11> = s.lazySchema(() =>
  s.object<Order11>(
    {
      ...order11Properties,
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      shippingCost: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      itemAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      items: s.optional(s.array(s.lazy(() => item1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
