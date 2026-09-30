import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messageThreadsResponseItemSchema,
  type MessageThreadsResponseItem,
} from "./message-threads-response-item.js";

export type MessageThreadsResponseResult = {
  response?: MessageThreadsResponseItem;
};

export const messageThreadsResponseResultSchema: Schema<MessageThreadsResponseResult> =
  s.object<MessageThreadsResponseResult>({
    response: s.optional(s.lazy(() => messageThreadsResponseItemSchema)),
  });
