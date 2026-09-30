import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MinPasswordComplexity = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type MinPasswordComplexity =
  | (typeof MinPasswordComplexity)[keyof typeof MinPasswordComplexity]
  | (number & {});

export const minPasswordComplexitySchema: EnumSchema<MinPasswordComplexity> =
  s.enumOf<MinPasswordComplexity>(MinPasswordComplexity);
