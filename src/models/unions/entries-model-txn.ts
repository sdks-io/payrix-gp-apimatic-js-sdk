import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/**
 * If the activity that this Entry refers to is a Transaction, then this field stores the identifier
 * of the corresponding Transaction resource.
 */
export type EntriesModelTxn = string | TxnsResponse;

export const entriesModelTxnSchema: Schema<EntriesModelTxn> = s.of<EntriesModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
