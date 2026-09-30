import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { txnResultsResponseItemSchema, type TxnResultsResponseItem } from "./txn-results-response-item.js";

export type TxnResultsResponseResult = {
  response?: TxnResultsResponseItem;
};

export const txnResultsResponseResultSchema: Schema<TxnResultsResponseResult> =
  s.object<TxnResultsResponseResult>({
    response: s.optional(s.lazy(() => txnResultsResponseItemSchema)),
  });
