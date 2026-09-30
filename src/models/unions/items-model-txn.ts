import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The txn in which these items have been sold, A single txn may have many items. */
export type ItemsModelTxn = string | TxnsResponse;

export const itemsModelTxnSchema: Schema<ItemsModelTxn> = s.of<ItemsModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
