import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusOrdersFilterStatus3Schema,
  type StatusOrdersFilterStatus3,
} from "./status-orders-filter-status3.js";

export type Filter8 = {
  /** The start date and time to search for in a range, using the resource time_created value. */
  fromTimeCreated?: string;
  /** The end time to search for in a range, using the resource time_created value. */
  toTimeCreated?: string;
  /** A unique identifier for the merchant set by Global Payments. */
  id?: string;
  /**
   * The overall status of the instance of the resource.
   *                   * `INITIATED` - indicates that the order request has been submitted for
   *                     fulfillment.
   *                   * `IN_PROGRESS` - indicates that order request was successful, an account has
   *                     been created and a device will be shipped.
   *                   * `FULFILLED` - indicates that the device has been shipped.
   *                   * `FAILED` - indicates that there was an error processing the order request.
   *                   * `UNDER_REIVEW` - The price of the potential order is availabe for review.
   *                     Device will not be shipped until order has been completed (see complete
   *                     order).
   */
  status?: StatusOrdersFilterStatus3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filter8Schema: Schema<Filter8> = s.object<Filter8>(
  {
    fromTimeCreated: s.optional(s.dateOnly()),
    toTimeCreated: s.optional(s.dateOnly()),
    id: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusOrdersFilterStatus3Schema)),
    _keysMap: {
      fromTimeCreated: "from__time_created",
      toTimeCreated: "to_time_created",
    },
  },
  { additionalProperties: s.json() },
);
