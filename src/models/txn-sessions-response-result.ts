import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { txnSessionsResponseItemSchema, type TxnSessionsResponseItem } from "./txn-sessions-response-item.js";

export type TxnSessionsResponseResult = {
  response?: TxnSessionsResponseItem;
};

export const txnSessionsResponseResultSchema: Schema<TxnSessionsResponseResult> =
  s.object<TxnSessionsResponseResult>({
    response: s.optional(s.lazy(() => txnSessionsResponseItemSchema)),
  });
