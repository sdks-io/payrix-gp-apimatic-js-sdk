import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { orgFlowAction2Schema, type OrgFlowAction2 } from "./org-flow-action2.js";
import { orgFlowSchema, type OrgFlow } from "./org-flow.js";
import { orgsResponseSchema, type OrgsResponse } from "./orgs-response.js";

export type OrgFlowActionsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  orgFlow?: OrgFlow;
  org?: OrgsResponse;
  action?: OrgFlowAction2;
};

export const orgFlowActionsResponseSchema: Schema<OrgFlowActionsResponse> = s.object<OrgFlowActionsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  orgFlow: s.optional(s.lazy(() => orgFlowSchema)),
  org: s.optional(s.lazy(() => orgsResponseSchema)),
  action: s.optional(s.lazy(() => orgFlowAction2Schema)),
});
