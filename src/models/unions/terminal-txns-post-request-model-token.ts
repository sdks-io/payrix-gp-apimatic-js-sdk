import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tokenPostRequestSchema, type TokenPostRequest } from "../token-post-request.js";

/** The ID of the token record to associate with this terminal transaction request. */
export type TerminalTxnsPostRequestModelToken = string | TokenPostRequest;

export const terminalTxnsPostRequestModelTokenSchema: Schema<TerminalTxnsPostRequestModelToken> =
  s.of<TerminalTxnsPostRequestModelToken>(s.union([s.string(), s.lazy(() => tokenPostRequestSchema)]));
