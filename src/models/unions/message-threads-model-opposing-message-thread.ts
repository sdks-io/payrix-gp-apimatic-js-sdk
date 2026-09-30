import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messageThreadsResponseSchema, type MessageThreadsResponse } from "../message-threads-response.js";

/** Specifies whether this is the opposing MessageThread. */
export type MessageThreadsModelOpposingMessageThread = string | MessageThreadsResponse;

export const messageThreadsModelOpposingMessageThreadSchema: Schema<MessageThreadsModelOpposingMessageThread> =
  s.of<MessageThreadsModelOpposingMessageThread>(
    s.union([s.string(), s.lazy(() => messageThreadsResponseSchema)]),
  );
