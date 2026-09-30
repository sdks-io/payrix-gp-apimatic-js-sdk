import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  orgFlowRulesResponseItemSchema,
  type OrgFlowRulesResponseItem,
} from "./org-flow-rules-response-item.js";

export type OrgFlowRulesResponseResult = {
  response?: OrgFlowRulesResponseItem;
};

export const orgFlowRulesResponseResultSchema: Schema<OrgFlowRulesResponseResult> =
  s.object<OrgFlowRulesResponseResult>({
    response: s.optional(s.lazy(() => orgFlowRulesResponseItemSchema)),
  });
