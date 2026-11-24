import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodeLinksActionResultCode = {
  Success: "SUCCESS",
} as const;
export type ResultCodeLinksActionResultCode =
  | (typeof ResultCodeLinksActionResultCode)[keyof typeof ResultCodeLinksActionResultCode]
  | (string & {});

export const resultCodeLinksActionResultCodeSchema: EnumSchema<ResultCodeLinksActionResultCode> =
  s.enumOf<ResultCodeLinksActionResultCode>(ResultCodeLinksActionResultCode);
