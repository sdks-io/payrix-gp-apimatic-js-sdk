import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where the action defined by this DecisionAction should apply.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `account` - **Account type Decision.**
 * - `txn` - **Txn type Decision.**
 * - `entity` - **Entity type Decision.**
 *
 * </details>
 */
export const DecisionActionsApplication1 = {
  Account: "account",
  Txn: "txn",
  Entity: "entity",
} as const;
export type DecisionActionsApplication1 =
  | (typeof DecisionActionsApplication1)[keyof typeof DecisionActionsApplication1]
  | (string & {});

export const decisionActionsApplication1Schema: EnumSchema<DecisionActionsApplication1> =
  s.enumOf<DecisionActionsApplication1>(DecisionActionsApplication1);
