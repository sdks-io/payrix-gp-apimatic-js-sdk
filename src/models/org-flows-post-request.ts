import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  orgFlowActionsPostRequestSchema,
  type OrgFlowActionsPostRequest,
} from "./org-flow-actions-post-request.js";
import {
  orgFlowRulesPostRequestSchema,
  type OrgFlowRulesPostRequest,
} from "./org-flow-rules-post-request.js";
import { orgFlowTrigger1Schema, type OrgFlowTrigger1 } from "./org-flow-trigger1.js";

export type OrgFlowsPostRequest = {
  /** The Login that owns this resource. */
  login?: string;
  /** The identifier of the Login resource for which this orgFlows resource is triggered. */
  forlogin?: string;
  /** The identifier of the Team resource for which this orgFlows resource is triggered. */
  team?: string;
  /** The identified of the Division resource for which this orgFlows resource is triggered. */
  division?: string;
  trigger: OrgFlowTrigger1;
  /** The identified of the Partition resource for which this orgFlows resource is triggered. */
  partition?: string;
  orgFlowActions?: OrgFlowActionsPostRequest[];
  orgFlowRules?: OrgFlowRulesPostRequest[];
};

export const orgFlowsPostRequestSchema: Schema<OrgFlowsPostRequest> = s.object<OrgFlowsPostRequest>({
  login: s.optional(s.string()),
  forlogin: s.optional(s.string()),
  team: s.optional(s.string()),
  division: s.optional(s.string()),
  trigger: orgFlowTrigger1Schema,
  partition: s.optional(s.string()),
  orgFlowActions: s.optional(s.array(s.lazy(() => orgFlowActionsPostRequestSchema))),
  orgFlowRules: s.optional(s.array(s.lazy(() => orgFlowRulesPostRequestSchema))),
});
