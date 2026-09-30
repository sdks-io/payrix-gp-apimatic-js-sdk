import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionActionType = {
  Equal: "equal",
  NotEqual: "notEqual",
  Contains: "contains",
  Greater: "greater",
  Less: "less",
} as const;
export type DecisionActionType = (typeof DecisionActionType)[keyof typeof DecisionActionType] | (string & {});

export const decisionActionTypeSchema: EnumSchema<DecisionActionType> =
  s.enumOf<DecisionActionType>(DecisionActionType);
