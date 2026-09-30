import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTokensResponseItemSchema, type AuthTokensResponseItem } from "./auth-tokens-response-item.js";

export type AuthTokensResponseResult = {
  response?: AuthTokensResponseItem;
};

export const authTokensResponseResultSchema: Schema<AuthTokensResponseResult> =
  s.object<AuthTokensResponseResult>({
    response: s.optional(s.lazy(() => authTokensResponseItemSchema)),
  });
