import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeTransfersActionResultCode = {
  Success: "SUCCESS",
  Declined: "DECLINED",
  Failed: "FAILED",
} as const;
export type ResultCodeTransfersActionResultCode =
  | (typeof ResultCodeTransfersActionResultCode)[keyof typeof ResultCodeTransfersActionResultCode]
  | (string & {});

export const resultCodeTransfersActionResultCodeSchema: EnumSchema<ResultCodeTransfersActionResultCode> =
  s.enumOf<ResultCodeTransfersActionResultCode>(ResultCodeTransfersActionResultCode);
