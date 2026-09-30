import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messagesResponseSchema, type MessagesResponse } from "../messages-response.js";

/** Specifies whether this is the opposingMessage or not. */
export type MessagesModelOpposingMessage = string | MessagesResponse;

export const messagesModelOpposingMessageSchema: Schema<MessagesModelOpposingMessage> =
  s.of<MessagesModelOpposingMessage>(s.union([s.string(), s.lazy(() => messagesResponseSchema)]));
