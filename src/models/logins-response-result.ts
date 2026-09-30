import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loginsResponseItemSchema, type LoginsResponseItem } from "./logins-response-item.js";

export type LoginsResponseResult = {
  response?: LoginsResponseItem;
};

export const loginsResponseResultSchema: Schema<LoginsResponseResult> = s.object<LoginsResponseResult>({
  response: s.optional(s.lazy(() => loginsResponseItemSchema)),
});
