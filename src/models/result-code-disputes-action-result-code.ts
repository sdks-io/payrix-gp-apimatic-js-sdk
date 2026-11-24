import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeDisputesActionResultCode = {
  Success: "SUCCESS",
} as const;
export type ResultCodeDisputesActionResultCode =
  | (typeof ResultCodeDisputesActionResultCode)[keyof typeof ResultCodeDisputesActionResultCode]
  | (string & {});

export const resultCodeDisputesActionResultCodeSchema: EnumSchema<ResultCodeDisputesActionResultCode> =
  s.enumOf<ResultCodeDisputesActionResultCode>(ResultCodeDisputesActionResultCode);
