import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeVerificationsActionResultCode = {
  Success: "SUCCESS",
  NotVerified: "NOT_VERIFIED",
} as const;
export type ResultCodeVerificationsActionResultCode =
  | (typeof ResultCodeVerificationsActionResultCode)[keyof typeof ResultCodeVerificationsActionResultCode]
  | (string & {});

export const resultCodeVerificationsActionResultCodeSchema: EnumSchema<ResultCodeVerificationsActionResultCode> =
  s.enumOf<ResultCodeVerificationsActionResultCode>(ResultCodeVerificationsActionResultCode);
