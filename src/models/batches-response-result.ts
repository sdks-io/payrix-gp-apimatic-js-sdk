import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchesResponseItemSchema, type BatchesResponseItem } from "./batches-response-item.js";

export type BatchesResponseResult = {
  response?: BatchesResponseItem;
};

export const batchesResponseResultSchema: Schema<BatchesResponseResult> = s.object<BatchesResponseResult>({
  response: s.optional(s.lazy(() => batchesResponseItemSchema)),
});
