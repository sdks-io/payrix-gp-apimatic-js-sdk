import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnRefsResponseSchema, type TxnRefsResponse } from "../txn-refs-response.js";

/** A list of references related to this Transaction. */
export type TxnsModelTxnRefs = string | TxnRefsResponse;

export const txnsModelTxnRefsSchema: Schema<TxnsModelTxnRefs> = s.of<TxnsModelTxnRefs>(
  s.union([s.string(), s.lazy(() => txnRefsResponseSchema)]),
);
