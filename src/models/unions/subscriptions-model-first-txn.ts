import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/**
 * The identification of the first transaction processed through this subscription. This is used
 * internally to process subsequent transactions.
 */
export type SubscriptionsModelFirstTxn = string | TxnsResponse;

export const subscriptionsModelFirstTxnSchema: Schema<SubscriptionsModelFirstTxn> =
  s.of<SubscriptionsModelFirstTxn>(s.union([s.string(), s.lazy(() => txnsResponseSchema)]));
