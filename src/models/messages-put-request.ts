import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagesRead1Schema, type MessagesRead1 } from "./messages-read1.js";

export type MessagesPutRequest = {
  read?: MessagesRead1;
};

export const messagesPutRequestSchema: Schema<MessagesPutRequest> = s.object<MessagesPutRequest>({
  read: s.optional(s.lazy(() => messagesRead1Schema)),
});
