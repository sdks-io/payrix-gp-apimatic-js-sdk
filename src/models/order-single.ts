import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action43Schema, type Action43 } from "./action43.js";
import { addresses2InternalSchema, addresses2Schema, type Addresses2 } from "./addresses2.js";
import {
  paymentMethod30InternalSchema,
  paymentMethod30Schema,
  type PaymentMethod30,
} from "./payment-method30.js";
import { products2InternalSchema, products2Schema, type Products2 } from "./products2.js";
import { statusOrdersStatusSchema, type StatusOrdersStatus } from "./status-orders-status.js";

export type OrderSingle = {
  /** A unique identifier for the merchant set by Global Payments. */
  id?: string;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** The merchant name of the account that sent the transfer. */
  merchantName?: string;
  /**
   * The overall status of the instance of the resource.
   *                   * `INITIATED` - indicates that the order request has been submitted for
   *                     fulfillment.
   *                   * `IN_PROGRESS` - indicates that order request was successful, an account has
   *                     been created and a device will be shipped.
   *                   * `FULFILLED` - indicates that the device has been shipped.
   *                   * `FAILED` - indicates that there was an error processing the order request.
   *                   * `FOR_REIVEW` - When passed in order request body, the price of the
   *                     potential order will be shown. Device will not be requrested until order
   *                     has been completed (see complete order).
   *                     * `UNDER_REIVEW` - The price of the potential order is availabe for review.
   *                       Device will not be shipped until order has been completed (see complete
   *                       order).
   */
  status?: StatusOrdersStatus;
  /** The total amouint of tax charged for the order */
  taxAmount?: string;
  /** The tax percentage charged for the order */
  taxPercentage?: string;
  /** Total Amount of an order */
  totalAmount?: string;
  /** A unique identifier for the account set by Global Payments. */
  accountId?: string;
  /** A unique identifier for the account set by Global Payments. */
  accountName?: string;
  /** GP API specific created time indicating when the instance of the resource was created. */
  timeCreated?: string;
  /** GP API specific last updated time when the instance of the resource was last updated. */
  timeLastUpdated?: string;
  /** Merchant defined field to reference the order */
  reference?: string;
  products?: Products2;
  addresses?: Addresses2;
  paymentMethod?: PaymentMethod30;
  action?: Action43;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderSingleProperties: s.Shape<OrderSingle> = {
  id: s.optional(s.string()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusOrdersStatusSchema)),
  taxAmount: s.optional(s.string()),
  taxPercentage: s.optional(s.string()),
  totalAmount: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  timeCreated: s.optional(s.string()),
  timeLastUpdated: s.optional(s.string()),
  reference: s.optional(s.string()),
  products: s.optional(s.lazy(() => products2InternalSchema)),
  addresses: s.optional(s.lazy(() => addresses2InternalSchema)),
  paymentMethod: s.optional(s.lazy(() => paymentMethod30InternalSchema)),
  action: s.optional(s.lazy(() => action43Schema)),
  _keysMap: {
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    taxAmount: "tax_amount",
    taxPercentage: "tax_percentage",
    totalAmount: "total_amount",
    accountId: "account_id",
    accountName: "account_name",
    timeCreated: "time_created",
    timeLastUpdated: "time_last_updated",
    paymentMethod: "payment_method",
  },
};

export const orderSingleInternalSchema: Schema<OrderSingle> = s.object<OrderSingle>(orderSingleProperties, {
  additionalProperties: s.json(),
});

export const orderSingleSchema: Schema<OrderSingle> = s.lazySchema(() =>
  s.object<OrderSingle>(
    {
      ...orderSingleProperties,
      products: s.optional(s.lazy(() => products2Schema)),
      addresses: s.optional(s.lazy(() => addresses2Schema)),
      paymentMethod: s.optional(s.lazy(() => paymentMethod30Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
