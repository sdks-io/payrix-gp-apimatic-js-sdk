import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the Txn that is being held with this hold. */
export type HoldsModelTxn = string | TxnsResponse;

export const holdsModelTxnSchema: Schema<HoldsModelTxn> = s.of<HoldsModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
