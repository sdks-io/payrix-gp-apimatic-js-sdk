import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unique reference to identify the error. */
export const DetailedErrorCode1 = {
  _40003: "40003",
  _40004: "40004",
} as const;
export type DetailedErrorCode1 = (typeof DetailedErrorCode1)[keyof typeof DetailedErrorCode1] | (string & {});

export const detailedErrorCode1Schema: EnumSchema<DetailedErrorCode1> =
  s.enumOf<DetailedErrorCode1>(DetailedErrorCode1);
