import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { feesResponseSchema, type FeesResponse } from "./fees-response.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { profitShareRuleType2Schema, type ProfitShareRuleType2 } from "./profit-share-rule-type2.js";
import { profitShareSchema, type ProfitShare } from "./profit-share.js";

export type ProfitShareRulesResponse = {
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
  profitShare?: ProfitShare;
  /**
   * The name of this ProfitShare Rule. This field is stored as a text string and must be between 0
   * and 100 characters long.
   */
  name?: string;
  /** Description of the Profit Share Rules. */
  description?: string;
  type?: ProfitShareRuleType2;
  /** The value to compare against when evaluating this ProfitShare Rule. */
  value?: string;
  /**
   * A name for a group of rules to be applied in conjunction when evaluating this ProfitShare Rule.
   * When grouping is used the ProfitShare will be allowed to be processed if at least one of the
   * rules are matched.
   */
  grouping?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
  fee?: FeesResponse;
};

export const profitShareRulesResponseSchema: Schema<ProfitShareRulesResponse> =
  s.object<ProfitShareRulesResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    profitShare: s.optional(s.lazy(() => profitShareSchema)),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    type: s.optional(s.lazy(() => profitShareRuleType2Schema)),
    value: s.optional(s.string()),
    grouping: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
    fee: s.optional(s.lazy(() => feesResponseSchema)),
  });
