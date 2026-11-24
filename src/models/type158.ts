import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of action executed. */
export const Type158 = {
  Authorize: "AUTHORIZE",
  Preauthorize: "PREAUTHORIZE",
  DccBinRangeList: "DCC_BIN_RANGE_LIST",
} as const;
export type Type158 = (typeof Type158)[keyof typeof Type158] | (string & {});

export const type158Schema: EnumSchema<Type158> = s.enumOf<Type158>(Type158);
