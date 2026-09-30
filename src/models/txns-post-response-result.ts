import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { txnsPostResponseItemSchema, type TxnsPostResponseItem } from "./txns-post-response-item.js";

export type TxnsPostResponseResult = {
  response?: TxnsPostResponseItem;
};

export const txnsPostResponseResultSchema: Schema<TxnsPostResponseResult> = s.object<TxnsPostResponseResult>({
  response: s.optional(s.lazy(() => txnsPostResponseItemSchema)),
});
