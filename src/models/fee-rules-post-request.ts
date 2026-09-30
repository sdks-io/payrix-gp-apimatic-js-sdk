import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feeApplication1Schema, type FeeApplication1 } from "./fee-application1.js";
import { feeRuleType1Schema, type FeeRuleType1 } from "./fee-rule-type1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type FeeRulesPostRequest = {
  /** The identifier of the Fee that this Fee Rule applies. */
  fee: string;
  /**
   * The name of this Fee Rule. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  /** The description of this Fee Rule. */
  description?: string;
  type: FeeRuleType1;
  application?: FeeApplication1;
  /** The value to compare against when evaluating this Fee Rule. */
  value: string;
  /**
   * A name for a group of rules to be applied in conjunction when evaluating this Fee Rule. When
   * grouping is used, the Fee will be allowed to be processed if at least one of the rules are
   * matched.
   */
  grouping?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const feeRulesPostRequestSchema: Schema<FeeRulesPostRequest> = s.object<FeeRulesPostRequest>({
  fee: s.string(),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  type: feeRuleType1Schema,
  application: s.optional(s.lazy(() => feeApplication1Schema)),
  value: s.string(),
  grouping: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
