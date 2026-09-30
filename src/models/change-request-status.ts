import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChangeRequestStatus = {
  Pending: "pending",
  ManualReview: "manualReview",
  Approved: "approved",
  Declined: "declined",
} as const;
export type ChangeRequestStatus =
  | (typeof ChangeRequestStatus)[keyof typeof ChangeRequestStatus]
  | (string & {});

export const changeRequestStatusSchema: EnumSchema<ChangeRequestStatus> =
  s.enumOf<ChangeRequestStatus>(ChangeRequestStatus);
