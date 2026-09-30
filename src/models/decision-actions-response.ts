import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { decisionActionType1Schema, type DecisionActionType1 } from "./decision-action-type1.js";
import {
  decisionActionsApplication1Schema,
  type DecisionActionsApplication1,
} from "./decision-actions-application1.js";
import {
  decisionActionsScoreType1Schema,
  type DecisionActionsScoreType1,
} from "./decision-actions-score-type1.js";
import { descisionActionsAction1Schema, type DescisionActionsAction1 } from "./descision-actions-action1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type DecisionActionsResponse = {
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
  /** The identifier of the Decision to which this resource applies. */
  decision?: string;
  action?: DescisionActionsAction1;
  application?: DecisionActionsApplication1;
  scoreType?: DecisionActionsScoreType1;
  type?: DecisionActionType1;
  /** The result field to check. */
  field?: string;
  /** The score to check. */
  score?: string;
  /** The decisionAction data will be matched with verificationReuslts data. */
  data?: string;
  /** The decisionAction message will be matched with verificationReuslts message. */
  message?: string;
  /** The decisionAction code will be matched with verificationReuslts code. */
  code?: string;
  /**
   * A name for a group of decisionActions to be applied in conjunction when evaluating this
   * DecisionAction; when grouping is used, the DecisionActions will not apply unless they all
   * match.
   */
  grouping?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const decisionActionsResponseSchema: Schema<DecisionActionsResponse> =
  s.object<DecisionActionsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    decision: s.optional(s.string()),
    action: s.optional(s.lazy(() => descisionActionsAction1Schema)),
    application: s.optional(s.lazy(() => decisionActionsApplication1Schema)),
    scoreType: s.optional(s.lazy(() => decisionActionsScoreType1Schema)),
    type: s.optional(s.lazy(() => decisionActionType1Schema)),
    field: s.optional(s.string()),
    score: s.optional(s.string()),
    data: s.optional(s.string()),
    message: s.optional(s.string()),
    code: s.optional(s.string()),
    grouping: s.optional(s.string()),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
