import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plansResponseItemSchema, type PlansResponseItem } from "./plans-response-item.js";

export type PlansResponseResult = {
  response?: PlansResponseItem;
};

export const plansResponseResultSchema: Schema<PlansResponseResult> = s.object<PlansResponseResult>({
  response: s.optional(s.lazy(() => plansResponseItemSchema)),
});
