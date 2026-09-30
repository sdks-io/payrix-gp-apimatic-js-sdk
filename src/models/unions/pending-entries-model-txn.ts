import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/**
 * If the activity that this PendingEntry refers to is a Transaction, then this field stores the
 * identifier of the corresponding Transaction resource.
 */
export type PendingEntriesModelTxn = string | TxnsResponse;

export const pendingEntriesModelTxnSchema: Schema<PendingEntriesModelTxn> = s.of<PendingEntriesModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
