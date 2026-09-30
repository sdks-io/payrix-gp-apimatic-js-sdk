import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VasOptOutTargetType = {
  Merchant: "merchant",
  Entity: "entity",
} as const;
export type VasOptOutTargetType =
  | (typeof VasOptOutTargetType)[keyof typeof VasOptOutTargetType]
  | (string & {});

export const vasOptOutTargetTypeSchema: EnumSchema<VasOptOutTargetType> =
  s.enumOf<VasOptOutTargetType>(VasOptOutTargetType);
