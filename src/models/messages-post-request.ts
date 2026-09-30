import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesRead1Schema, type MessagesRead1 } from "./messages-read1.js";
import { messagesSecure1Schema, type MessagesSecure1 } from "./messages-secure1.js";

export type MessagesPostRequest = {
  /** The identifier of the messageThreads that owns this Messages resource. */
  messageThread: string;
  secure?: MessagesSecure1;
  read: MessagesRead1;
  /** Free-form text for adding a message to a messageThread resource. */
  message: string;
};

export const messagesPostRequestSchema: Schema<MessagesPostRequest> = s.object<MessagesPostRequest>({
  messageThread: s.string(),
  secure: s.optional(s.lazy(() => messagesSecure1Schema)),
  read: messagesRead1Schema,
  message: s.string(),
});
