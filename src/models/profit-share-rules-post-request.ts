import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { profitShareRuleType2Schema, type ProfitShareRuleType2 } from "./profit-share-rule-type2.js";
import { profitSharesPostRequestSchema, type ProfitSharesPostRequest } from "./profit-shares-post-request.js";

export type ProfitShareRulesPostRequest = {
  profitShare: ProfitSharesPostRequest;
  /**
   * The name of this ProfitShare Rule. This field is stored as a text string and must be between 0
   * and 100 characters long.
   */
  name?: string;
  /** Description of the Profit Share Rules. */
  description?: string;
  type: ProfitShareRuleType2;
  /** The value to compare against when evaluating this ProfitShare Rule. */
  value: string;
  /**
   * A name for a group of rules to be applied in conjunction when evaluating this ProfitShare Rule.
   * When grouping is used the ProfitShare will be allowed to be processed if at least one of the
   * rules are matched.
   */
  grouping?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const profitShareRulesPostRequestSchema: Schema<ProfitShareRulesPostRequest> =
  s.object<ProfitShareRulesPostRequest>({
    profitShare: profitSharesPostRequestSchema,
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    type: profitShareRuleType2Schema,
    value: s.string(),
    grouping: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
