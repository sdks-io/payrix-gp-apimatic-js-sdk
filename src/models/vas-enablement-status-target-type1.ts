import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of record to retrieve the enablement status for. Must be either 'merchant' or 'entity'.
 */
export const VasEnablementStatusTargetType1 = {
  Merchant: "merchant",
  Entity: "entity",
} as const;
export type VasEnablementStatusTargetType1 =
  | (typeof VasEnablementStatusTargetType1)[keyof typeof VasEnablementStatusTargetType1]
  | (string & {});

export const vasEnablementStatusTargetType1Schema: EnumSchema<VasEnablementStatusTargetType1> =
  s.enumOf<VasEnablementStatusTargetType1>(VasEnablementStatusTargetType1);
