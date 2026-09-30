import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messagesResponseSchema, type MessagesResponse } from "../messages-response.js";

/** Specifies whether this is the opposingMessage or not. */
export type MessagesPostModelOpposingMessage = string | MessagesResponse;

export const messagesPostModelOpposingMessageSchema: Schema<MessagesPostModelOpposingMessage> =
  s.of<MessagesPostModelOpposingMessage>(s.union([s.string(), s.lazy(() => messagesResponseSchema)]));
