import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { decisionRulesResponseSchema, type DecisionRulesResponse } from "./decision-rules-response.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type DecisionRulesResponseItem = {
  /** The data object that the API returns for this request. */
  data?: DecisionRulesResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const decisionRulesResponseItemSchema: Schema<DecisionRulesResponseItem> =
  s.object<DecisionRulesResponseItem>({
    data: s.optional(s.array(s.lazy(() => decisionRulesResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });
