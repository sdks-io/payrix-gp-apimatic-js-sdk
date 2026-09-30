import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { decisionActionsResponseSchema, type DecisionActionsResponse } from "../decision-actions-response.js";

/** The identifier of the DecisionAction associated with this Hold resource. */
export type HoldsModelDecisionAction = string | DecisionActionsResponse;

export const holdsModelDecisionActionSchema: Schema<HoldsModelDecisionAction> =
  s.of<HoldsModelDecisionAction>(s.union([s.string(), s.lazy(() => decisionActionsResponseSchema)]));
