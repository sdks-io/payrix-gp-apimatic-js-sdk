import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  decisionRulesResponseItemSchema,
  type DecisionRulesResponseItem,
} from "./decision-rules-response-item.js";

export type DecisionRulesResponseResult = {
  response?: DecisionRulesResponseItem;
};

export const decisionRulesResponseResultSchema: Schema<DecisionRulesResponseResult> =
  s.object<DecisionRulesResponseResult>({
    response: s.optional(s.lazy(() => decisionRulesResponseItemSchema)),
  });
