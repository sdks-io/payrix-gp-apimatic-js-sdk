import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeOrdersActionResultCode = {
  Success: "SUCCESS",
  Declined: "DECLINED",
} as const;
export type ResultCodeOrdersActionResultCode =
  | (typeof ResultCodeOrdersActionResultCode)[keyof typeof ResultCodeOrdersActionResultCode]
  | (string & {});

export const resultCodeOrdersActionResultCodeSchema: EnumSchema<ResultCodeOrdersActionResultCode> =
  s.enumOf<ResultCodeOrdersActionResultCode>(ResultCodeOrdersActionResultCode);
