import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionActionsApplication = {
  Account: "account",
  Txn: "txn",
  Entity: "entity",
} as const;
export type DecisionActionsApplication =
  | (typeof DecisionActionsApplication)[keyof typeof DecisionActionsApplication]
  | (string & {});

export const decisionActionsApplicationSchema: EnumSchema<DecisionActionsApplication> =
  s.enumOf<DecisionActionsApplication>(DecisionActionsApplication);
