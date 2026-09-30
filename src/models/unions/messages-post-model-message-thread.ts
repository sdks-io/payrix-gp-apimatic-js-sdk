import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messageThreadsResponseSchema, type MessageThreadsResponse } from "../message-threads-response.js";

/** The identifier of the messageThreads that owns this Messages resource. */
export type MessagesPostModelMessageThread = string | MessageThreadsResponse;

export const messagesPostModelMessageThreadSchema: Schema<MessagesPostModelMessageThread> =
  s.of<MessagesPostModelMessageThread>(s.union([s.string(), s.lazy(() => messageThreadsResponseSchema)]));
