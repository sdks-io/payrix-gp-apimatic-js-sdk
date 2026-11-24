import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DetailedErrorCode123 = {
  _40118: "40118",
} as const;
export type DetailedErrorCode123 =
  | (typeof DetailedErrorCode123)[keyof typeof DetailedErrorCode123]
  | (string & {});

export const detailedErrorCode123Schema: EnumSchema<DetailedErrorCode123> =
  s.enumOf<DetailedErrorCode123>(DetailedErrorCode123);
