import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgFlowsPostRequestSchema, type OrgFlowsPostRequest } from "../org-flows-post-request.js";

/** The identifier of the orgFlow resource that this orgFlowActions resource is associated with. */
export type OrgFlowRulesPostRequestModelOrgFlow = string | OrgFlowsPostRequest;

export const orgFlowRulesPostRequestModelOrgFlowSchema: Schema<OrgFlowRulesPostRequestModelOrgFlow> =
  s.of<OrgFlowRulesPostRequestModelOrgFlow>(s.union([s.string(), s.lazy(() => orgFlowsPostRequestSchema)]));
