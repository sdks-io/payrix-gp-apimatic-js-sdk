import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { messageThreadSchema, type MessageThread } from "./message-thread.js";
import { messageType1Schema, type MessageType1 } from "./message-type1.js";
import { messagesGenerated1Schema, type MessagesGenerated1 } from "./messages-generated1.js";
import { messagesRead1Schema, type MessagesRead1 } from "./messages-read1.js";
import { messagesSecure1Schema, type MessagesSecure1 } from "./messages-secure1.js";

export type MessagesResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  messageThread?: MessageThread;
  opposingMessage?: MessagesResponse;
  type?: MessageType1;
  generated?: MessagesGenerated1;
  secure?: MessagesSecure1;
  read?: MessagesRead1;
  /** Free-form text for adding a message to a messageThread resource. */
  message?: string;
  opposingMessages?: MessagesResponse;
};

export const messagesResponseSchema: Schema<MessagesResponse> = s.object<MessagesResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  messageThread: s.optional(s.lazy(() => messageThreadSchema)),
  opposingMessage: s.optional(s.lazy(() => messagesResponseSchema)),
  type: s.optional(s.lazy(() => messageType1Schema)),
  generated: s.optional(s.lazy(() => messagesGenerated1Schema)),
  secure: s.optional(s.lazy(() => messagesSecure1Schema)),
  read: s.optional(s.lazy(() => messagesRead1Schema)),
  message: s.optional(s.string()),
  opposingMessages: s.optional(s.lazy(() => messagesResponseSchema)),
});
