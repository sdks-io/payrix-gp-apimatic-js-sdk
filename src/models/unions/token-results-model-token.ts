import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tokensResponseSchema, type TokensResponse } from "../tokens-response.js";

/** The identifier of the Token resource that this tokenResult relates to. */
export type TokenResultsModelToken = string | TokensResponse;

export const tokenResultsModelTokenSchema: Schema<TokenResultsModelToken> = s.of<TokenResultsModelToken>(
  s.union([s.string(), s.lazy(() => tokensResponseSchema)]),
);
