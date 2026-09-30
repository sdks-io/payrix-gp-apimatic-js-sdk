import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of DecisionAction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `equal` - **Equal.**
 * - `notEqual` - **Not Equal.**
 * - `contains` - **Contains.**
 * - `greater` - **Greater.**
 * - `less` - **Less.**
 *
 * </details>
 */
export const DecisionActionType1 = {
  Equal: "equal",
  NotEqual: "notEqual",
  Contains: "contains",
  Greater: "greater",
  Less: "less",
} as const;
export type DecisionActionType1 =
  | (typeof DecisionActionType1)[keyof typeof DecisionActionType1]
  | (string & {});

export const decisionActionType1Schema: EnumSchema<DecisionActionType1> =
  s.enumOf<DecisionActionType1>(DecisionActionType1);
