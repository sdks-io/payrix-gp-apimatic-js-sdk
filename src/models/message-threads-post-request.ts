import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesPostRequestSchema, type MessagesPostRequest } from "./messages-post-request.js";

export type MessageThreadsPostRequest = {
  /** The identifier of the Login that owns this messageThreads resource. */
  login: string;
  /** The identifier of the receiving Login of this messageThreads resource. */
  forlogin?: string;
  /** The identifier of the Hold that is related to this messageThread. */
  hold?: string;
  /**
   * This field has the ID from the EntityReturns table that hold ACH returns for disbursements or
   * eCheck txns.
   */
  entityReturn?: string;
  /** Specifies whether this is the opposing MessageThread. */
  opposingMessageThread?: string;
  /**
   * Free-form text. By default, a messageThread resource is set as 'default'.
   *
   * @default "default"
   */
  folder?: string;
  /** Free-form text that represents the name of the sender of a messageThread resource. */
  sender: string;
  /** Free-form text that represents the name of the recipient of a messageThread resource. */
  recipient: string;
  /** Free-form text for adding a subject to a messageThread resource. */
  subject: string;
  messages?: MessagesPostRequest[];
};

export const messageThreadsPostRequestSchema: Schema<MessageThreadsPostRequest> =
  s.object<MessageThreadsPostRequest>({
    login: s.string(),
    forlogin: s.optional(s.string()),
    hold: s.optional(s.string()),
    entityReturn: s.optional(s.string()),
    opposingMessageThread: s.optional(s.string()),
    folder: s.defaulted(s.string(), "default"),
    sender: s.string(),
    recipient: s.string(),
    subject: s.string(),
    messages: s.optional(s.array(s.lazy(() => messagesPostRequestSchema))),
  });
