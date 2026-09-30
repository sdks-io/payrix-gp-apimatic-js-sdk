import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of entity to opt out. Must be either 'merchant' or 'entity'. */
export const VasOptOutTargetType1 = {
  Merchant: "merchant",
  Entity: "entity",
} as const;
export type VasOptOutTargetType1 =
  | (typeof VasOptOutTargetType1)[keyof typeof VasOptOutTargetType1]
  | (string & {});

export const vasOptOutTargetType1Schema: EnumSchema<VasOptOutTargetType1> =
  s.enumOf<VasOptOutTargetType1>(VasOptOutTargetType1);
