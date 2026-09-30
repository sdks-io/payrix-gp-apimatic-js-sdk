import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisbursementsFundingStatus = {
  Pending: "pending",
  Processed: "processed",
} as const;
export type DisbursementsFundingStatus =
  | (typeof DisbursementsFundingStatus)[keyof typeof DisbursementsFundingStatus]
  | (string & {});

export const disbursementsFundingStatusSchema: EnumSchema<DisbursementsFundingStatus> =
  s.enumOf<DisbursementsFundingStatus>(DisbursementsFundingStatus);
