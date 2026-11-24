import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeAuthenticationsActionResultCode = {
  Success: "SUCCESS",
} as const;
export type ResultCodeAuthenticationsActionResultCode =
  | (typeof ResultCodeAuthenticationsActionResultCode)[keyof typeof ResultCodeAuthenticationsActionResultCode]
  | (string & {});

export const resultCodeAuthenticationsActionResultCodeSchema: EnumSchema<ResultCodeAuthenticationsActionResultCode> =
  s.enumOf<ResultCodeAuthenticationsActionResultCode>(ResultCodeAuthenticationsActionResultCode);
