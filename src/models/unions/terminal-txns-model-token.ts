import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tokensResponseSchema, type TokensResponse } from "../tokens-response.js";

/** The ID of the token record to associate with this terminal transaction request. */
export type TerminalTxnsModelToken = string | TokensResponse;

export const terminalTxnsModelTokenSchema: Schema<TerminalTxnsModelToken> = s.of<TerminalTxnsModelToken>(
  s.union([s.string(), s.lazy(() => tokensResponseSchema)]),
);
