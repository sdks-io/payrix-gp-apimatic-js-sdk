import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  txnMetaDatasResponseItemSchema,
  type TxnMetaDatasResponseItem,
} from "./txn-meta-datas-response-item.js";

export type TxnMetaDatasResponseResult = {
  response?: TxnMetaDatasResponseItem;
};

export const txnMetaDatasResponseResultSchema: Schema<TxnMetaDatasResponseResult> =
  s.object<TxnMetaDatasResponseResult>({
    response: s.optional(s.lazy(() => txnMetaDatasResponseItemSchema)),
  });
