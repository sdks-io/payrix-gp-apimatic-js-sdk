import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesResponseItemSchema, type MessagesResponseItem } from "./messages-response-item.js";

export type MessagesResponseResult = {
  response?: MessagesResponseItem;
};

export const messagesResponseResultSchema: Schema<MessagesResponseResult> = s.object<MessagesResponseResult>({
  response: s.optional(s.lazy(() => messagesResponseItemSchema)),
});
