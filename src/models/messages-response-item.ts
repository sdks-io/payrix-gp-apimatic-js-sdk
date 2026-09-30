import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import { messagesResponseSchema, type MessagesResponse } from "./messages-response.js";

export type MessagesResponseItem = {
  /** The data object that the API returns for this request. */
  data?: MessagesResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const messagesResponseItemSchema: Schema<MessagesResponseItem> = s.object<MessagesResponseItem>({
  data: s.optional(s.array(s.lazy(() => messagesResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});
