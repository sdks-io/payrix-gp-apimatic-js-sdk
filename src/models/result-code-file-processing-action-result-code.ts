import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeFileProcessingActionResultCode = {
  Success: "SUCCESS",
  Declined: "DECLINED",
  Pending: "PENDING",
  Error: "ERROR",
} as const;
export type ResultCodeFileProcessingActionResultCode =
  | (typeof ResultCodeFileProcessingActionResultCode)[keyof typeof ResultCodeFileProcessingActionResultCode]
  | (string & {});

export const resultCodeFileProcessingActionResultCodeSchema: EnumSchema<ResultCodeFileProcessingActionResultCode> =
  s.enumOf<ResultCodeFileProcessingActionResultCode>(ResultCodeFileProcessingActionResultCode);
