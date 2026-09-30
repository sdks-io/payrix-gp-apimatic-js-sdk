import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HoldsReleaseAction = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type HoldsReleaseAction = (typeof HoldsReleaseAction)[keyof typeof HoldsReleaseAction] | (number & {});

export const holdsReleaseActionSchema: EnumSchema<HoldsReleaseAction> =
  s.enumOf<HoldsReleaseAction>(HoldsReleaseAction);
