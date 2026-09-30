import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisbursementsDisbursementEntriesStatus = {
  Pending: "pending",
  Processing: "processing",
  Processed: "processed",
} as const;
export type DisbursementsDisbursementEntriesStatus =
  | (typeof DisbursementsDisbursementEntriesStatus)[keyof typeof DisbursementsDisbursementEntriesStatus]
  | (string & {});

export const disbursementsDisbursementEntriesStatusSchema: EnumSchema<DisbursementsDisbursementEntriesStatus> =
  s.enumOf<DisbursementsDisbursementEntriesStatus>(DisbursementsDisbursementEntriesStatus);
