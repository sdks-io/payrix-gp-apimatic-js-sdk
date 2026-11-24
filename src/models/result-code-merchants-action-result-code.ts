import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeMerchantsActionResultCode = {
  Success: "SUCCESS",
  Decline: "DECLINE",
} as const;
export type ResultCodeMerchantsActionResultCode =
  | (typeof ResultCodeMerchantsActionResultCode)[keyof typeof ResultCodeMerchantsActionResultCode]
  | (string & {});

export const resultCodeMerchantsActionResultCodeSchema: EnumSchema<ResultCodeMerchantsActionResultCode> =
  s.enumOf<ResultCodeMerchantsActionResultCode>(ResultCodeMerchantsActionResultCode);
