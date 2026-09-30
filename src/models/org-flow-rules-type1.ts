import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of logic to apply with this OrgFlow Rule.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `MCC` - **Type MCC.** The Orgflow applies based on the MCC properties of the merchants.
 * - `Custom` - **Type Custom.** The Orgflow applies based on the custom properties of the entities.
 *
 * </details>
 */
export const OrgFlowRulesType1 = {
  Mcc: "MCC",
  Custom: "Custom",
} as const;
export type OrgFlowRulesType1 = (typeof OrgFlowRulesType1)[keyof typeof OrgFlowRulesType1] | (string & {});

export const orgFlowRulesType1Schema: EnumSchema<OrgFlowRulesType1> =
  s.enumOf<OrgFlowRulesType1>(OrgFlowRulesType1);
