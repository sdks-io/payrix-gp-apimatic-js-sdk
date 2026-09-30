import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgFlowsResponseSchema, type OrgFlowsResponse } from "../org-flows-response.js";

/** The identifier of the orgFlow resource that this orgFlowActions resource is associated with. */
export type OrgFlowRulesModelOrgFlow = string | OrgFlowsResponse;

export const orgFlowRulesModelOrgFlowSchema: Schema<OrgFlowRulesModelOrgFlow> =
  s.of<OrgFlowRulesModelOrgFlow>(s.union([s.string(), s.lazy(() => orgFlowsResponseSchema)]));
