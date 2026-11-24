import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeActionsActionResultCode = {
  Success: "SUCCESS",
  Declined: "DECLINED",
  Pending: "PENDING",
} as const;
export type ResultCodeActionsActionResultCode =
  | (typeof ResultCodeActionsActionResultCode)[keyof typeof ResultCodeActionsActionResultCode]
  | (string & {});

export const resultCodeActionsActionResultCodeSchema: EnumSchema<ResultCodeActionsActionResultCode> =
  s.enumOf<ResultCodeActionsActionResultCode>(ResultCodeActionsActionResultCode);
