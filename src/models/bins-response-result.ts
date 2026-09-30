import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { binsResponseItemSchema, type BinsResponseItem } from "./bins-response-item.js";

export type BinsResponseResult = {
  response?: BinsResponseItem;
};

export const binsResponseResultSchema: Schema<BinsResponseResult> = s.object<BinsResponseResult>({
  response: s.optional(s.lazy(() => binsResponseItemSchema)),
});
