import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeBatchesActionResultCode = {
  Success: "SUCCESS",
} as const;
export type ResultCodeBatchesActionResultCode =
  | (typeof ResultCodeBatchesActionResultCode)[keyof typeof ResultCodeBatchesActionResultCode]
  | (string & {});

export const resultCodeBatchesActionResultCodeSchema: EnumSchema<ResultCodeBatchesActionResultCode> =
  s.enumOf<ResultCodeBatchesActionResultCode>(ResultCodeBatchesActionResultCode);
