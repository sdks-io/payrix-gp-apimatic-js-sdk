import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { orgFlowRulesType1Schema, type OrgFlowRulesType1 } from "./org-flow-rules-type1.js";
import { orgFlowsPostRequestSchema, type OrgFlowsPostRequest } from "./org-flows-post-request.js";

export type OrgFlowRulesPostRequest = {
  orgFlow?: OrgFlowsPostRequest;
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

export const orgFlowRulesPostRequestSchema: Schema<OrgFlowRulesPostRequest> =
  s.object<OrgFlowRulesPostRequest>({
    orgFlow: s.optional(s.lazy(() => orgFlowsPostRequestSchema)),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    type: s.optional(s.lazy(() => orgFlowRulesType1Schema)),
    value: s.optional(s.string()),
    grouping: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
