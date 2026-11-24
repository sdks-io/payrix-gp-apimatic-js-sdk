import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A meaningful description for the status or status change. */
export const StatusReasonMerchantsStatusReason = {
  ClosedByMerchant: "CLOSED_BY_MERCHANT",
} as const;
export type StatusReasonMerchantsStatusReason =
  | (typeof StatusReasonMerchantsStatusReason)[keyof typeof StatusReasonMerchantsStatusReason]
  | (string & {});

export const statusReasonMerchantsStatusReasonSchema: EnumSchema<StatusReasonMerchantsStatusReason> =
  s.enumOf<StatusReasonMerchantsStatusReason>(StatusReasonMerchantsStatusReason);
