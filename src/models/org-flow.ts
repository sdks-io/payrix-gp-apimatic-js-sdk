import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator14Schema, type Creator14 } from "./creator14.js";
import { division3Schema, type Division3 } from "./division3.js";
import { forloginSchema, type Forlogin } from "./forlogin.js";
import { login2Schema, type Login2 } from "./login2.js";
import { orgFlowActionsResponseSchema, type OrgFlowActionsResponse } from "./org-flow-actions-response.js";
import { orgFlowRulesResponseSchema, type OrgFlowRulesResponse } from "./org-flow-rules-response.js";
import { orgFlowTrigger1Schema, type OrgFlowTrigger1 } from "./org-flow-trigger1.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";
import { teamSchema, type Team } from "./team.js";

export type OrgFlow = {
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
  creator?: Creator14;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  forlogin?: Forlogin;
  team?: Team;
  division?: Division3;
  trigger?: OrgFlowTrigger1;
  partition?: PartitionsResponse;
  orgFlowActions?: OrgFlowActionsResponse[];
  orgFlowRules?: OrgFlowRulesResponse[];
};

export const orgFlowSchema: Schema<OrgFlow> = s.object<OrgFlow>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator14Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  forlogin: s.optional(s.lazy(() => forloginSchema)),
  team: s.optional(s.lazy(() => teamSchema)),
  division: s.optional(s.lazy(() => division3Schema)),
  trigger: s.optional(s.lazy(() => orgFlowTrigger1Schema)),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
  orgFlowActions: s.optional(s.array(s.lazy(() => orgFlowActionsResponseSchema))),
  orgFlowRules: s.optional(s.array(s.lazy(() => orgFlowRulesResponseSchema))),
});
