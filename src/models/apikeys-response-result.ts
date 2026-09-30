import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apikeysResponseItemSchema, type ApikeysResponseItem } from "./apikeys-response-item.js";

export type ApikeysResponseResult = {
  response?: ApikeysResponseItem;
};

export const apikeysResponseResultSchema: Schema<ApikeysResponseResult> = s.object<ApikeysResponseResult>({
  response: s.optional(s.lazy(() => apikeysResponseItemSchema)),
});
