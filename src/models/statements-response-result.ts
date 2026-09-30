import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementsResponseItemSchema, type StatementsResponseItem } from "./statements-response-item.js";

export type StatementsResponseResult = {
  response?: StatementsResponseItem;
};

export const statementsResponseResultSchema: Schema<StatementsResponseResult> =
  s.object<StatementsResponseResult>({
    response: s.optional(s.lazy(() => statementsResponseItemSchema)),
  });
