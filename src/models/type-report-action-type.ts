import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeReportActionType = {
  ReportList: "REPORT_LIST",
} as const;
export type TypeReportActionType =
  | (typeof TypeReportActionType)[keyof typeof TypeReportActionType]
  | (string & {});

export const typeReportActionTypeSchema: EnumSchema<TypeReportActionType> =
  s.enumOf<TypeReportActionType>(TypeReportActionType);
