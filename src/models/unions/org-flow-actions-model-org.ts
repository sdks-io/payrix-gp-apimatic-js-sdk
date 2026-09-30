import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org resource that this orgFlowActions resource is associated with. */
export type OrgFlowActionsModelOrg = string | OrgsResponse;

export const orgFlowActionsModelOrgSchema: Schema<OrgFlowActionsModelOrg> = s.of<OrgFlowActionsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
