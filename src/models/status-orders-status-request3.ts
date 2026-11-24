import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The only option for an orders request is FOR_REVIEW.
 * * `FOR_REIVEW` - When passed in order request body, the price of the potential order will be
 *   shown. Device will not be requested until order has been completed (see complete order).
 */
export const StatusOrdersStatusRequest3 = {
  ForReview: "FOR_REVIEW",
} as const;
export type StatusOrdersStatusRequest3 =
  | (typeof StatusOrdersStatusRequest3)[keyof typeof StatusOrdersStatusRequest3]
  | (string & {});

export const statusOrdersStatusRequest3Schema: EnumSchema<StatusOrdersStatusRequest3> =
  s.enumOf<StatusOrdersStatusRequest3>(StatusOrdersStatusRequest3);
