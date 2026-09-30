import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { decisionRuleType1Schema, type DecisionRuleType1 } from "./decision-rule-type1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type DecisionRulesResponse = {
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
  /** The identifier of the Decision that this Decision Rule applies. */
  decision?: string;
  /**
   * The name of this Decision Rule. This field is stored as a text string and must be between 0 and
   * 100 characters long.
   */
  name?: string;
  /** Description of the Decision Rules. */
  description?: string;
  type?: DecisionRuleType1;
  /** The value to compare against when evaluating this Decision Rule. */
  value?: number;
  /**
   * A name for a group of rules to be applied in conjunction when evaluating this Decision Rule;
   * When grouping is used, the Decision will be allowed to be processed if at least one of the
   * rules are matched.
   */
  grouping?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const decisionRulesResponseSchema: Schema<DecisionRulesResponse> = s.object<DecisionRulesResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  decision: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  type: s.optional(s.lazy(() => decisionRuleType1Schema)),
  value: s.optional(s.number()),
  grouping: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
