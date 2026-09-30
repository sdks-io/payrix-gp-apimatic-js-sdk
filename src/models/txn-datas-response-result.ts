import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { txnDatasResponseItemSchema, type TxnDatasResponseItem } from "./txn-datas-response-item.js";

export type TxnDatasResponseResult = {
  response?: TxnDatasResponseItem;
};

export const txnDatasResponseResultSchema: Schema<TxnDatasResponseResult> = s.object<TxnDatasResponseResult>({
  response: s.optional(s.lazy(() => txnDatasResponseItemSchema)),
});
