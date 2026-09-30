import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messageThreadsResponseSchema, type MessageThreadsResponse } from "../message-threads-response.js";

/** The identifier of the messageThreads that owns this Messages resource. */
export type MessagesModelMessageThread = string | MessageThreadsResponse;

export const messagesModelMessageThreadSchema: Schema<MessagesModelMessageThread> =
  s.of<MessagesModelMessageThread>(s.union([s.string(), s.lazy(() => messageThreadsResponseSchema)]));
