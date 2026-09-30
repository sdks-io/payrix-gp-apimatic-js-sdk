import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator13Schema, type Creator13 } from "./creator13.js";
import { entityReturnSchema, type EntityReturn } from "./entity-return.js";
import { forloginSchema, type Forlogin } from "./forlogin.js";
import { holdSchema, type Hold } from "./hold.js";
import { login2Schema, type Login2 } from "./login2.js";
import { messageThreadsResponseSchema, type MessageThreadsResponse } from "./message-threads-response.js";
import { messagesResponseSchema, type MessagesResponse } from "./messages-response.js";

export type OpposingMessageThread = {
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
  creator?: Creator13;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  forlogin?: Forlogin;
  hold?: Hold;
  entityReturn?: EntityReturn;
  opposingMessageThreads?: MessageThreadsResponse;
  /** Free-form text. By default, a messageThread resource is set as 'default'. */
  folder?: string;
  /** Free-form text that represents the name of the sender of a messageThread resource. */
  sender?: string;
  /** Free-form text that represents the name of the recipient of a messageThread resource. */
  recipient?: string;
  /** Free-form text for adding a subject to a messageThread resource. */
  subject?: string;
  messages?: MessagesResponse[];
  opposingMessageThread?: OpposingMessageThread;
};

export const opposingMessageThreadSchema: Schema<OpposingMessageThread> = s.object<OpposingMessageThread>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator13Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  forlogin: s.optional(s.lazy(() => forloginSchema)),
  hold: s.optional(s.lazy(() => holdSchema)),
  entityReturn: s.optional(s.lazy(() => entityReturnSchema)),
  opposingMessageThreads: s.optional(s.lazy(() => messageThreadsResponseSchema)),
  folder: s.optional(s.string()),
  sender: s.optional(s.string()),
  recipient: s.optional(s.string()),
  subject: s.optional(s.string()),
  messages: s.optional(s.array(s.lazy(() => messagesResponseSchema))),
  opposingMessageThread: s.optional(s.lazy(() => opposingMessageThreadSchema)),
});
