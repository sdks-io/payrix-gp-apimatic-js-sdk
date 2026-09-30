import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "../orgs-post-request.js";

/** The identifier of the OrgFlow resource that this orgFlowActions resource is associated with. */
export type OrgFlowActionsPostRequestModelOrg = string | OrgsPostRequest;

export const orgFlowActionsPostRequestModelOrgSchema: Schema<OrgFlowActionsPostRequestModelOrg> =
  s.of<OrgFlowActionsPostRequestModelOrg>(s.union([s.string(), s.lazy(() => orgsPostRequestSchema)]));
