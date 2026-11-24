import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicated where the dispute is in the life-cycle. */
export const StatusDisputesStatus = {
  UnderReview: "UNDER_REVIEW",
  WithMerchant: "WITH_MERCHANT",
  Closed: "CLOSED",
  Funded: "FUNDED",
} as const;
export type StatusDisputesStatus =
  | (typeof StatusDisputesStatus)[keyof typeof StatusDisputesStatus]
  | (string & {});

export const statusDisputesStatusSchema: EnumSchema<StatusDisputesStatus> =
  s.enumOf<StatusDisputesStatus>(StatusDisputesStatus);
