import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HoldAction = {
  _0: 0,
  _1: 1,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _8: 8,
} as const;
export type HoldAction = (typeof HoldAction)[keyof typeof HoldAction] | (number & {});

export const holdActionSchema: EnumSchema<HoldAction> = s.enumOf<HoldAction>(HoldAction);
