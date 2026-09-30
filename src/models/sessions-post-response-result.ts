import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sessionsPostResponseItemSchema,
  type SessionsPostResponseItem,
} from "./sessions-post-response-item.js";

export type SessionsPostResponseResult = {
  response?: SessionsPostResponseItem;
};

export const sessionsPostResponseResultSchema: Schema<SessionsPostResponseResult> =
  s.object<SessionsPostResponseResult>({
    response: s.optional(s.lazy(() => sessionsPostResponseItemSchema)),
  });
