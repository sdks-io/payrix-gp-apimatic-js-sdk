import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeFundsActionResultCode = {
  Success: "SUCCESS",
} as const;
export type ResultCodeFundsActionResultCode =
  | (typeof ResultCodeFundsActionResultCode)[keyof typeof ResultCodeFundsActionResultCode]
  | (string & {});

export const resultCodeFundsActionResultCodeSchema: EnumSchema<ResultCodeFundsActionResultCode> =
  s.enumOf<ResultCodeFundsActionResultCode>(ResultCodeFundsActionResultCode);
