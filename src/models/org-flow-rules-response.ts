import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { orgFlowRulesType1Schema, type OrgFlowRulesType1 } from "./org-flow-rules-type1.js";
import { orgFlowSchema, type OrgFlow } from "./org-flow.js";

export type OrgFlowRulesResponse = {
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
  /** The name of the orgFlowRules resource. */
  name?: string;
  /** The description of the orgFlowRules resource. */
  description?: string;
  type?: OrgFlowRulesType1;
  /** The value to compare against when evaluating this OrgFlowRule. */
  value?: string;
  /**
   * A name for a group of rules to be applied in conjunction when evaluating this OrgFlow Rule.
   * \nWhen grouping is used the OrgFlow will be allowed to be processed if at least one of the
   * rules are matched.
   */
  grouping?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const orgFlowRulesResponseSchema: Schema<OrgFlowRulesResponse> = s.object<OrgFlowRulesResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  orgFlow: s.optional(s.lazy(() => orgFlowSchema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  type: s.optional(s.lazy(() => orgFlowRulesType1Schema)),
  value: s.optional(s.string()),
  grouping: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
