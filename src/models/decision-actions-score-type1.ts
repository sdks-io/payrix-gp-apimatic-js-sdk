import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of score result on the related Decision.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `low` - **Only applies if the check hit the low of the parent decision.**
 * - `high` - **Only applies if the check hit the high of the parent decision.**
 * - `none` - **Only applies if the check did not hit the high or low of the parent decision.**
 *
 * </details>
 */
export const DecisionActionsScoreType1 = {
  Low: "low",
  High: "high",
  None: "none",
} as const;
export type DecisionActionsScoreType1 =
  | (typeof DecisionActionsScoreType1)[keyof typeof DecisionActionsScoreType1]
  | (string & {});

export const decisionActionsScoreType1Schema: EnumSchema<DecisionActionsScoreType1> =
  s.enumOf<DecisionActionsScoreType1>(DecisionActionsScoreType1);
