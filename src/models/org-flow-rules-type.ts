import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrgFlowRulesType = {
  Mcc: "MCC",
  Custom: "Custom",
} as const;
export type OrgFlowRulesType = (typeof OrgFlowRulesType)[keyof typeof OrgFlowRulesType] | (string & {});

export const orgFlowRulesTypeSchema: EnumSchema<OrgFlowRulesType> =
  s.enumOf<OrgFlowRulesType>(OrgFlowRulesType);
