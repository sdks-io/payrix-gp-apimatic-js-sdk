import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionActionsScoreType = {
  Low: "low",
  High: "high",
  None: "none",
} as const;
export type DecisionActionsScoreType =
  | (typeof DecisionActionsScoreType)[keyof typeof DecisionActionsScoreType]
  | (string & {});

export const decisionActionsScoreTypeSchema: EnumSchema<DecisionActionsScoreType> =
  s.enumOf<DecisionActionsScoreType>(DecisionActionsScoreType);
