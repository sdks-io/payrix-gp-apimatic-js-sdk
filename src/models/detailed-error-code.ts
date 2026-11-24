import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unique reference to identify the error. */
export const DetailedErrorCode = {
  _40001: "40001",
  _40002: "40002",
} as const;
export type DetailedErrorCode = (typeof DetailedErrorCode)[keyof typeof DetailedErrorCode] | (string & {});

export const detailedErrorCodeSchema: EnumSchema<DetailedErrorCode> =
  s.enumOf<DetailedErrorCode>(DetailedErrorCode);
