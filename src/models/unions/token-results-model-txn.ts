import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the Txn resource that this tokenResult relates to. */
export type TokenResultsModelTxn = string | TxnsResponse;

export const tokenResultsModelTxnSchema: Schema<TokenResultsModelTxn> = s.of<TokenResultsModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
