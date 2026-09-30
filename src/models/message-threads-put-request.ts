import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessageThreadsPutRequest = {
  /** The identifier of the Login that owns this messageThreads resource. */
  login?: string;
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
  /** Free-form text. By default, a messageThread resource is set as 'default'. */
  folder?: string;
  /** Free-form text that represents the name of the sender of a messageThread resource. */
  sender?: string;
  /** Free-form text that represents the name of the recipient of a messageThread resource. */
  recipient?: string;
  /** Free-form text for adding a subject to a messageThread resource. */
  subject?: string;
};

export const messageThreadsPutRequestSchema: Schema<MessageThreadsPutRequest> =
  s.object<MessageThreadsPutRequest>({
    login: s.optional(s.string()),
    forlogin: s.optional(s.string()),
    hold: s.optional(s.string()),
    entityReturn: s.optional(s.string()),
    opposingMessageThread: s.optional(s.string()),
    folder: s.optional(s.string()),
    sender: s.optional(s.string()),
    recipient: s.optional(s.string()),
    subject: s.optional(s.string()),
  });
