import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unique reference to identify the error. */
export const DetailedErrorCode2 = {
  _50011: "50011",
} as const;
export type DetailedErrorCode2 = (typeof DetailedErrorCode2)[keyof typeof DetailedErrorCode2] | (string & {});

export const detailedErrorCode2Schema: EnumSchema<DetailedErrorCode2> =
  s.enumOf<DetailedErrorCode2>(DetailedErrorCode2);
