import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrgFlowAction = {
  Add: "add",
  Remove: "remove",
} as const;
export type OrgFlowAction = (typeof OrgFlowAction)[keyof typeof OrgFlowAction] | (string & {});

export const orgFlowActionSchema: EnumSchema<OrgFlowAction> = s.enumOf<OrgFlowAction>(OrgFlowAction);
