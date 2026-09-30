import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgFlowsResponseSchema, type OrgFlowsResponse } from "../org-flows-response.js";

/** The identifier of the OrgFlow resource that this orgFlowActions resource is associated with. */
export type OrgFlowActionsModelOrgFlow = string | OrgFlowsResponse;

export const orgFlowActionsModelOrgFlowSchema: Schema<OrgFlowActionsModelOrgFlow> =
  s.of<OrgFlowActionsModelOrgFlow>(s.union([s.string(), s.lazy(() => orgFlowsResponseSchema)]));
