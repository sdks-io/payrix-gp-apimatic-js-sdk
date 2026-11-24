import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  deliveryTimeframeConsentsOrderDeliveryTimeframeSchema,
  type DeliveryTimeframeConsentsOrderDeliveryTimeframe,
} from "./delivery-timeframe-consents-order-delivery-timeframe.js";
import { items2InternalSchema, items2Schema, type Items2 } from "./items2.js";
import {
  shippingTypeConsentsOrderShippingTypeSchema,
  type ShippingTypeConsentsOrderShippingType,
} from "./shipping-type-consents-order-shipping-type.js";

export type Order56 = {
  /** The merchant's reference for the order the transaction is associated with. */
  reference: string;
  /** Shipping method for the product. */
  deliveryTimeframe?: DeliveryTimeframeConsentsOrderDeliveryTimeframe;
  /** Indicates how the merchandise will be shipped to the customer. */
  shippingType: ShippingTypeConsentsOrderShippingType;
  /** Shipping Cost of the order. */
  shippingCost?: string;
  /** The total amount of the order across all items being purchased and all charges. */
  amount: string;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency: string;
  /** The total tax amount associated with the order. */
  taxAmount?: string;
  /**
   * The total amount of the order across all items being purchased exclusive of charges separate to
   * the items being bought.
   */
  itemAmount?: string;
  items?: Items2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order56Properties: s.Shape<Order56> = {
  reference: s.string(),
  deliveryTimeframe: s.optional(s.lazy(() => deliveryTimeframeConsentsOrderDeliveryTimeframeSchema)),
  shippingType: shippingTypeConsentsOrderShippingTypeSchema,
  shippingCost: s.optional(s.string()),
  amount: s.string(),
  currency: s.string(),
  taxAmount: s.optional(s.string()),
  itemAmount: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => items2InternalSchema))),
  _keysMap: {
    deliveryTimeframe: "delivery_timeframe",
    shippingType: "shipping_type",
    shippingCost: "shipping_cost",
    taxAmount: "tax_amount",
    itemAmount: "item_amount",
  },
};

export const order56InternalSchema: Schema<Order56> = s.object<Order56>(order56Properties, {
  additionalProperties: s.json(),
});

export const order56Schema: Schema<Order56> = s.lazySchema(() =>
  s.object<Order56>(
    {
      ...order56Properties,
      reference: s.string().check(s.minLength(1), s.maxLength(50)),
      shippingCost: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.string().check(s.minLength(1), s.maxLength(50)),
      taxAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      itemAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      items: s.optional(s.array(s.lazy(() => items2Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
