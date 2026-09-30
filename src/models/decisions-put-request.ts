import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  decisionActionsApplication1Schema,
  type DecisionActionsApplication1,
} from "./decision-actions-application1.js";
import { decisionType1Schema, type DecisionType1 } from "./decision-type1.js";
import { decisionsPeriod1Schema, type DecisionsPeriod1 } from "./decisions-period1.js";
import { decisionsTarget1Schema, type DecisionsTarget1 } from "./decisions-target1.js";
import { decisionsUseCache1Schema, type DecisionsUseCache1 } from "./decisions-use-cache1.js";
import { descisionAction1Schema, type DescisionAction1 } from "./descision-action1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type DecisionsPutRequest = {
  /** The identifier of the Login that owns this decisions resource. */
  login?: string;
  /**
   * If this decision resource relates to an Org, then this field stores the identifier of the Org.
   */
  org?: string;
  /**
   * If this decision resource relates to an Entity, then this field stores the identifier of the
   * Entity.
   */
  entity?: string;
  /**
   * The identifier of a linked decision resource that acts in coordination with this decision. When
   * you define a decision attribute here, the referenced decision becomes the 'parent' resource.
   * The action field set on the 'parent' resource determines the action that occurs if all of the
   * linked decisions fail.
   */
  decision?: string;
  /** Identifier of the division to which the decision resource belongs. */
  division?: string;
  /** Identifier of the partition to which the decision resource belongs. */
  partition?: string;
  application?: DecisionActionsApplication1;
  /** The levels of decision admin, merchant, division, partition. */
  level?: string;
  type?: DecisionType1;
  target?: DecisionsTarget1;
  action?: DescisionAction1;
  /**
   * A sequence number to use when applying multiple linked decisions: When two or more decisions
   * are linked using their 'decision' fields, the checks with lower 'sequence' numbers are applied
   * first; this field is specified as an integer.
   */
  sequence?: number;
  /**
   * The minimum value that the Transaction must be to target this decision, The unit of measure is
   * determined by the type of check.
   */
  amount?: number;
  /**
   * The amount that the associated Transaction should be compared against. The units for this field
   * depend on the type of check: for checks that are based on a ratio, specify the amount as a
   * percentage in basis points; for checks that are based on a dollar amount, specify the amount in
   * cents; for checks that are based on a count, specify the exact value as an integer.
   */
  value?: string;
  period?: DecisionsPeriod1;
  /**
   * A multiplier that you can use to adjust the basic date range set in the 'period' field, such as
   * daily, weekly, monthly, or annually; this field is specified as an integer and its value
   * determines how the interval is multiplied.
   */
  periodFactor?: number;
  /** The schedule that determines when this Decision is triggered to check entities. */
  schedule?: string;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, if it is set
   * to a duration-based trigger, such as daily, weekly, monthly, or annually. This field is
   * specified as an integer and its value determines how the interval is multiplied.
   */
  scheduleFactor?: number;
  /**
   * The date on which checking of the Decision should start is specified as an eight digit string
   * in YYYYMMDD format, for example, '20160120' for January 20, 2016; the value of this field must
   * represent a date in the future, or the present date.
   */
  start?: number;
  /**
   * The date on which checking of the Decision should end. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016. The value of this
   * field must represent a date in the future.
   */
  finish?: number;
  /**
   * A lower cut-off value for the score in this decision; the check fails if the score is equal to
   * or below this value.
   */
  low?: number;
  /**
   * An upper cut-off value for the score in this decision; the check fails if the score is equal to
   * or above this value.
   */
  high?: number;
  useCache?: DecisionsUseCache1;
  /** The time caching limit to check for existing verification. */
  cacheTime?: number;
  /** The options for the Verification are specified as a sum of the desired options. */
  options?: number;
  /** The additionalOptions for the Verification are specified as a sum of the desired options. */
  additionalOptions?: number;
  /**
   * The error message for the decision: If the field is null the error message will be a generic
   * failure message, if the field is empty the error message will be a specific error message, if
   * the field is set to a string the error message will be that string.
   */
  errorMessage?: string;
  /**
   * The reason for the decision. If the field is null the error message will be a generic message,
   * if the field is set to a string the reason message will be that string.
   */
  reason?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const decisionsPutRequestSchema: Schema<DecisionsPutRequest> = s.object<DecisionsPutRequest>({
  login: s.optional(s.string()),
  org: s.optional(s.string()),
  entity: s.optional(s.string()),
  decision: s.optional(s.string()),
  division: s.optional(s.string()),
  partition: s.optional(s.string()),
  application: s.optional(s.lazy(() => decisionActionsApplication1Schema)),
  level: s.optional(s.string()),
  type: s.optional(s.lazy(() => decisionType1Schema)),
  target: s.optional(s.lazy(() => decisionsTarget1Schema)),
  action: s.optional(s.lazy(() => descisionAction1Schema)),
  sequence: s.optional(s.number()),
  amount: s.optional(s.number()),
  value: s.optional(s.string()),
  period: s.optional(s.lazy(() => decisionsPeriod1Schema)),
  periodFactor: s.optional(s.number()),
  schedule: s.optional(s.string()),
  scheduleFactor: s.optional(s.number()),
  start: s.optional(s.number()),
  finish: s.optional(s.number()),
  low: s.optional(s.number()),
  high: s.optional(s.number()),
  useCache: s.optional(s.lazy(() => decisionsUseCache1Schema)),
  cacheTime: s.optional(s.number()),
  options: s.optional(s.number()),
  additionalOptions: s.optional(s.number()),
  errorMessage: s.optional(s.string()),
  reason: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
