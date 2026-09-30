import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  tokenResultsResponseItemSchema,
  type TokenResultsResponseItem,
} from "./token-results-response-item.js";

export type TokenResultsResponseResult = {
  response?: TokenResultsResponseItem;
};

export const tokenResultsResponseResultSchema: Schema<TokenResultsResponseResult> =
  s.object<TokenResultsResponseResult>({
    response: s.optional(s.lazy(() => tokenResultsResponseItemSchema)),
  });
