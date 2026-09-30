import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  decisionActionsResponseItemSchema,
  type DecisionActionsResponseItem,
} from "./decision-actions-response-item.js";

export type DecisionActionsResponseResult = {
  response?: DecisionActionsResponseItem;
};

export const decisionActionsResponseResultSchema: Schema<DecisionActionsResponseResult> =
  s.object<DecisionActionsResponseResult>({
    response: s.optional(s.lazy(() => decisionActionsResponseItemSchema)),
  });
