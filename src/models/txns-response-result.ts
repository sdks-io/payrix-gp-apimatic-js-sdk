import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { txnsResponseItemSchema, type TxnsResponseItem } from "./txns-response-item.js";

export type TxnsResponseResult = {
  response?: TxnsResponseItem;
};

export const txnsResponseResultSchema: Schema<TxnsResponseResult> = s.object<TxnsResponseResult>({
  response: s.optional(s.lazy(() => txnsResponseItemSchema)),
});
