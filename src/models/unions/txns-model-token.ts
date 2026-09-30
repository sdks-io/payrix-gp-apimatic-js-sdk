import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tokensResponseSchema, type TokensResponse } from "../tokens-response.js";

/** The token of the Tokens resource this Transaction is associated with. */
export type TxnsModelToken = string | TokensResponse;

export const txnsModelTokenSchema: Schema<TxnsModelToken> = s.of<TxnsModelToken>(
  s.union([s.string(), s.lazy(() => tokensResponseSchema)]),
);
