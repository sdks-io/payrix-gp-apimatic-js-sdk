import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/**
 * If this Transaction is related to another Transaction, then this field is set to the identifier
 * of the other Transaction. For example, if this Transaction is a refund, this field could be set
 * to the identifier of the original sale Transaction.
 */
export type TxnsModelFortxn = string | TxnsResponse;

export const txnsModelFortxnSchema: Schema<TxnsModelFortxn> = s.of<TxnsModelFortxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
