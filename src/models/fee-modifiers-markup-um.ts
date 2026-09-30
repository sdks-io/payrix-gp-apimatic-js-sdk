import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeeModifiersMarkupUm = {
  _1: 1,
  _2: 2,
} as const;
export type FeeModifiersMarkupUm =
  | (typeof FeeModifiersMarkupUm)[keyof typeof FeeModifiersMarkupUm]
  | (number & {});

export const feeModifiersMarkupUmSchema: EnumSchema<FeeModifiersMarkupUm> =
  s.enumOf<FeeModifiersMarkupUm>(FeeModifiersMarkupUm);
