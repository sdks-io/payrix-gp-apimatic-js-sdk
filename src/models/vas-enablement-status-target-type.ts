import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VasEnablementStatusTargetType = {
  Merchant: "merchant",
  Entity: "entity",
} as const;
export type VasEnablementStatusTargetType =
  | (typeof VasEnablementStatusTargetType)[keyof typeof VasEnablementStatusTargetType]
  | (string & {});

export const vasEnablementStatusTargetTypeSchema: EnumSchema<VasEnablementStatusTargetType> =
  s.enumOf<VasEnablementStatusTargetType>(VasEnablementStatusTargetType);
