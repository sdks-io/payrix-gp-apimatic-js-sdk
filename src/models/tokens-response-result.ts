import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokensResponseItemSchema, type TokensResponseItem } from "./tokens-response-item.js";

export type TokensResponseResult = {
  response?: TokensResponseItem;
};

export const tokensResponseResultSchema: Schema<TokensResponseResult> = s.object<TokensResponseResult>({
  response: s.optional(s.lazy(() => tokensResponseItemSchema)),
});
