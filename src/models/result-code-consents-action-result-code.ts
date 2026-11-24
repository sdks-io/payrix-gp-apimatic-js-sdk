import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. SUCCESS - indicates the action executed successfully. */
export const ResultCodeConsentsActionResultCode = {
  Success: "SUCCESS",
} as const;
export type ResultCodeConsentsActionResultCode =
  | (typeof ResultCodeConsentsActionResultCode)[keyof typeof ResultCodeConsentsActionResultCode]
  | (string & {});

export const resultCodeConsentsActionResultCodeSchema: EnumSchema<ResultCodeConsentsActionResultCode> =
  s.enumOf<ResultCodeConsentsActionResultCode>(ResultCodeConsentsActionResultCode);
