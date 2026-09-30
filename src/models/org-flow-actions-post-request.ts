import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orgFlowAction2Schema, type OrgFlowAction2 } from "./org-flow-action2.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "./orgs-post-request.js";

export type OrgFlowActionsPostRequest = {
  /**
   * The identifier of the orgFlow resource that this orgFlowActions resource is associated with.
   */
  orgFlow: string;
  org: OrgsPostRequest;
  action: OrgFlowAction2;
};

export const orgFlowActionsPostRequestSchema: Schema<OrgFlowActionsPostRequest> =
  s.object<OrgFlowActionsPostRequest>({
    orgFlow: s.string(),
    org: orgsPostRequestSchema,
    action: orgFlowAction2Schema,
  });
