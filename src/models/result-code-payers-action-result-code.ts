import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodePayersActionResultCode = {
  Success: "SUCCESS",
  Decline: "DECLINE",
} as const;
export type ResultCodePayersActionResultCode =
  | (typeof ResultCodePayersActionResultCode)[keyof typeof ResultCodePayersActionResultCode]
  | (string & {});

export const resultCodePayersActionResultCodeSchema: EnumSchema<ResultCodePayersActionResultCode> =
  s.enumOf<ResultCodePayersActionResultCode>(ResultCodePayersActionResultCode);
