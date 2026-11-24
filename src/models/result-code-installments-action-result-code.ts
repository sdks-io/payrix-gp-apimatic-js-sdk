import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeInstallmentsActionResultCode = {
  Success: "SUCCESS",
  Declined: "DECLINED",
  Pending: "PENDING",
  Error: "ERROR",
} as const;
export type ResultCodeInstallmentsActionResultCode =
  | (typeof ResultCodeInstallmentsActionResultCode)[keyof typeof ResultCodeInstallmentsActionResultCode]
  | (string & {});

export const resultCodeInstallmentsActionResultCodeSchema: EnumSchema<ResultCodeInstallmentsActionResultCode> =
  s.enumOf<ResultCodeInstallmentsActionResultCode>(ResultCodeInstallmentsActionResultCode);
