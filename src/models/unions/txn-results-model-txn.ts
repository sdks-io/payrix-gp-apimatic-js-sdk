import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the Transaction associated with this txnResults resource. */
export type TxnResultsModelTxn = string | TxnsResponse;

export const txnResultsModelTxnSchema: Schema<TxnResultsModelTxn> = s.of<TxnResultsModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
