import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressesInternalSchema, addressesSchema, type Addresses } from "./addresses.js";
import { notifications11Schema, type Notifications11 } from "./notifications11.js";
import {
  paymentMethod30InternalSchema,
  paymentMethod30Schema,
  type PaymentMethod30,
} from "./payment-method30.js";
import { productsInternalSchema, productsSchema, type Products } from "./products.js";
import {
  statusOrdersStatusRequest3Schema,
  type StatusOrdersStatusRequest3,
} from "./status-orders-status-request3.js";

export type OrderRequest = {
  products?: Products;
  /**
   * The pricing profile the ordering merchant is configured for. Only required if the merchant has
   * changed to a new pricing profile after boarding.
   */
  pricingProfile?: string;
  /**
   * The only option for an orders request is FOR_REVIEW.
   * * `FOR_REIVEW` - When passed in order request body, the price of the potential order will be
   *   shown. Device will not be requested until order has been completed (see complete order).
   */
  status?: StatusOrdersStatusRequest3;
  addresses?: Addresses;
  paymentMethod?: PaymentMethod30;
  notifications?: Notifications11;
  /** Specified time to close the Batch */
  batchCloseTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderRequestProperties: s.Shape<OrderRequest> = {
  products: s.optional(s.lazy(() => productsInternalSchema)),
  pricingProfile: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusOrdersStatusRequest3Schema)),
  addresses: s.optional(s.lazy(() => addressesInternalSchema)),
  paymentMethod: s.optional(s.lazy(() => paymentMethod30InternalSchema)),
  notifications: s.optional(s.lazy(() => notifications11Schema)),
  batchCloseTime: s.optional(s.string()),
  _keysMap: {
    pricingProfile: "pricing_profile",
    paymentMethod: "payment_method",
    batchCloseTime: "batch_close_time",
  },
};

export const orderRequestInternalSchema: Schema<OrderRequest> = s.object<OrderRequest>(
  orderRequestProperties,
  { additionalProperties: s.json() },
);

export const orderRequestSchema: Schema<OrderRequest> = s.lazySchema(() =>
  s.object<OrderRequest>(
    {
      ...orderRequestProperties,
      products: s.optional(s.lazy(() => productsSchema)),
      pricingProfile: s.optional(s.string().check(s.maxLength(255))),
      addresses: s.optional(s.lazy(() => addressesSchema)),
      paymentMethod: s.optional(s.lazy(() => paymentMethod30Schema)),
      batchCloseTime: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
