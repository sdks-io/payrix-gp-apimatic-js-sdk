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
 *                   * `FOR_REIVEW` - When passed in order request body, the price of the potential
 *                     order will be shown. Device will not be requrested until order has been
 *                     completed (see complete order).
 *                     * `UNDER_REIVEW` - The price of the potential order is availabe for review.
 *                       Device will not be shipped until order has been completed (see complete
 *                       order).
 */
export const StatusOrdersStatus = {
  Initiated: "INITIATED",
  InProgress: "IN_PROGRESS",
  Fulfilled: "FULFILLED",
  Failed: "FAILED",
  ForReview: "FOR_REVIEW",
  UnderReview: "UNDER_REVIEW",
} as const;
export type StatusOrdersStatus = (typeof StatusOrdersStatus)[keyof typeof StatusOrdersStatus] | (string & {});

export const statusOrdersStatusSchema: EnumSchema<StatusOrdersStatus> =
  s.enumOf<StatusOrdersStatus>(StatusOrdersStatus);
