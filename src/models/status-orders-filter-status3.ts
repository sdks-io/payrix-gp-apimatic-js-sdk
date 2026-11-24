import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const StatusOrdersFilterStatus3 = {
  Initiated: "INITIATED",
  InProgress: "IN_PROGRESS",
  Fulfilled: "FULFILLED",
  Failed: "FAILED",
  UnderReview: "UNDER_REVIEW",
} as const;
export type StatusOrdersFilterStatus3 =
  | (typeof StatusOrdersFilterStatus3)[keyof typeof StatusOrdersFilterStatus3]
  | (string & {});

export const statusOrdersFilterStatus3Schema: EnumSchema<StatusOrdersFilterStatus3> =
  s.enumOf<StatusOrdersFilterStatus3>(StatusOrdersFilterStatus3);
