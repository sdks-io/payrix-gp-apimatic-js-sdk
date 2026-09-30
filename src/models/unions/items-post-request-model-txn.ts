import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsPostRequestSchema, type TxnsPostRequest } from "../txns-post-request.js";

/** The txn in which these items have been sold, A single txn may have many items. */
export type ItemsPostRequestModelTxn = string | TxnsPostRequest;

export const itemsPostRequestModelTxnSchema: Schema<ItemsPostRequestModelTxn> =
  s.of<ItemsPostRequestModelTxn>(s.union([s.string(), s.lazy(() => txnsPostRequestSchema)]));
