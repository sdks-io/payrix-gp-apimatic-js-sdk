import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sessionsResponseItemSchema, type SessionsResponseItem } from "./sessions-response-item.js";

export type SessionsResponseResult = {
  response?: SessionsResponseItem;
};

export const sessionsResponseResultSchema: Schema<SessionsResponseResult> = s.object<SessionsResponseResult>({
  response: s.optional(s.lazy(() => sessionsResponseItemSchema)),
});
