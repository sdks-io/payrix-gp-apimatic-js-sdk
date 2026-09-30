import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/**
 * Reauthorize this referenced Transaction. For example, to process a resubmission of a declined
 * Transaction or to reauthorize an expired Transaction.
 */
export type TxnsModelFromtxn = string | TxnsResponse;

export const txnsModelFromtxnSchema: Schema<TxnsModelFromtxn> = s.of<TxnsModelFromtxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
