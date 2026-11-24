import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unique reference to identify the error. */
export const DetailedErrorCode5 = {
  _50012: "50012",
} as const;
export type DetailedErrorCode5 = (typeof DetailedErrorCode5)[keyof typeof DetailedErrorCode5] | (string & {});

export const detailedErrorCode5Schema: EnumSchema<DetailedErrorCode5> =
  s.enumOf<DetailedErrorCode5>(DetailedErrorCode5);
