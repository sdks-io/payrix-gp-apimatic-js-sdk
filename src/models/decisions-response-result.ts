import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { decisionsResponseItemSchema, type DecisionsResponseItem } from "./decisions-response-item.js";

export type DecisionsResponseResult = {
  response?: DecisionsResponseItem;
};

export const decisionsResponseResultSchema: Schema<DecisionsResponseResult> =
  s.object<DecisionsResponseResult>({
    response: s.optional(s.lazy(() => decisionsResponseItemSchema)),
  });
