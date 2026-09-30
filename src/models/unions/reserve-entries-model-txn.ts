import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/**
 * This field indicates that this reserveEntry was triggered from a Transaction, and it stores the
 * identifier of the Transaction.
 */
export type ReserveEntriesModelTxn = string | TxnsResponse;

export const reserveEntriesModelTxnSchema: Schema<ReserveEntriesModelTxn> = s.of<ReserveEntriesModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
