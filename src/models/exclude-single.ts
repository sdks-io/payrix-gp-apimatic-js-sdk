import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExcludeSingle = {
  _0: 0,
  _1: 1,
} as const;
export type ExcludeSingle = (typeof ExcludeSingle)[keyof typeof ExcludeSingle] | (number & {});

export const excludeSingleSchema: EnumSchema<ExcludeSingle> = s.enumOf<ExcludeSingle>(ExcludeSingle);
