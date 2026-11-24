import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unique reference to identify the error. */
export const DetailedErrorCode3 = {
  _50008: "50008",
} as const;
export type DetailedErrorCode3 = (typeof DetailedErrorCode3)[keyof typeof DetailedErrorCode3] | (string & {});

export const detailedErrorCode3Schema: EnumSchema<DetailedErrorCode3> =
  s.enumOf<DetailedErrorCode3>(DetailedErrorCode3);
