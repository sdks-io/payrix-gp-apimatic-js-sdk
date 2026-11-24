import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeReportActionResultCode = {
  Success: "SUCCESS",
  Decline: "DECLINE",
} as const;
export type ResultCodeReportActionResultCode =
  | (typeof ResultCodeReportActionResultCode)[keyof typeof ResultCodeReportActionResultCode]
  | (string & {});

export const resultCodeReportActionResultCodeSchema: EnumSchema<ResultCodeReportActionResultCode> =
  s.enumOf<ResultCodeReportActionResultCode>(ResultCodeReportActionResultCode);
