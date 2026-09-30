import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagesPostResponseItemSchema,
  type MessagesPostResponseItem,
} from "./messages-post-response-item.js";

export type MessagesPostResponseResult = {
  response?: MessagesPostResponseItem;
};

export const messagesPostResponseResultSchema: Schema<MessagesPostResponseResult> =
  s.object<MessagesPostResponseResult>({
    response: s.optional(s.lazy(() => messagesPostResponseItemSchema)),
  });
