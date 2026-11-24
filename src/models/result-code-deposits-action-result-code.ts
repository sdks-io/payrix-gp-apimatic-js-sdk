import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeDepositsActionResultCode = {
  Success: "SUCCESS",
} as const;
export type ResultCodeDepositsActionResultCode =
  | (typeof ResultCodeDepositsActionResultCode)[keyof typeof ResultCodeDepositsActionResultCode]
  | (string & {});

export const resultCodeDepositsActionResultCodeSchema: EnumSchema<ResultCodeDepositsActionResultCode> =
  s.enumOf<ResultCodeDepositsActionResultCode>(ResultCodeDepositsActionResultCode);
