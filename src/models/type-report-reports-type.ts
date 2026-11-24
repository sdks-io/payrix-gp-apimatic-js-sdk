import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the report type */
export const TypeReportReportsType = {
  TransactionSummary: "TRANSACTION_SUMMARY",
} as const;
export type TypeReportReportsType =
  | (typeof TypeReportReportsType)[keyof typeof TypeReportReportsType]
  | (string & {});

export const typeReportReportsTypeSchema: EnumSchema<TypeReportReportsType> =
  s.enumOf<TypeReportReportsType>(TypeReportReportsType);
