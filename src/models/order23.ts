import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusOrdersStatusSchema, type StatusOrdersStatus } from "./status-orders-status.js";

export type Order23 = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const order23Schema: Schema<Order23> = s.object<Order23>(
  {
    id: s.optional(s.string()),
    merchantId: s.optional(s.string()),
    merchantName: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusOrdersStatusSchema)),
    accountId: s.optional(s.string()),
    accountName: s.optional(s.string()),
    timeCreated: s.optional(s.string()),
    timeLastUpdated: s.optional(s.string()),
    reference: s.optional(s.string()),
    _keysMap: {
      merchantId: "merchant_id",
      merchantName: "merchant_name",
      accountId: "account_id",
      accountName: "account_name",
      timeCreated: "time_created",
      timeLastUpdated: "time_last_updated",
    },
  },
  { additionalProperties: s.json() },
);
