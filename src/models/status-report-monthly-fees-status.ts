import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicated where the report is in its lifecycle. */
export const StatusReportMonthlyFeesStatus = {
  Finalized: "FINALIZED",
  Estimated: "ESTIMATED",
} as const;
export type StatusReportMonthlyFeesStatus =
  | (typeof StatusReportMonthlyFeesStatus)[keyof typeof StatusReportMonthlyFeesStatus]
  | (string & {});

export const statusReportMonthlyFeesStatusSchema: EnumSchema<StatusReportMonthlyFeesStatus> =
  s.enumOf<StatusReportMonthlyFeesStatus>(StatusReportMonthlyFeesStatus);
