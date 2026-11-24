import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unique reference to identify the error. */
export const DetailedErrorCode6 = {
  _40016: "40016",
} as const;
export type DetailedErrorCode6 = (typeof DetailedErrorCode6)[keyof typeof DetailedErrorCode6] | (string & {});

export const detailedErrorCode6Schema: EnumSchema<DetailedErrorCode6> =
  s.enumOf<DetailedErrorCode6>(DetailedErrorCode6);
