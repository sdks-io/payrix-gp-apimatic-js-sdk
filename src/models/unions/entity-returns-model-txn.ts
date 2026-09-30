import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/**
 * This field indicates that this EntityReturn was triggered from a\ \ Transaction. \nThis field
 * stores the identifier of the Transaction.
 */
export type EntityReturnsModelTxn = string | TxnsResponse;

export const entityReturnsModelTxnSchema: Schema<EntityReturnsModelTxn> = s.of<EntityReturnsModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
