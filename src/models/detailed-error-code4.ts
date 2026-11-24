import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unique reference to identify the error. */
export const DetailedErrorCode4 = {
  _50002: "50002",
} as const;
export type DetailedErrorCode4 = (typeof DetailedErrorCode4)[keyof typeof DetailedErrorCode4] | (string & {});

export const detailedErrorCode4Schema: EnumSchema<DetailedErrorCode4> =
  s.enumOf<DetailedErrorCode4>(DetailedErrorCode4);
