import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the Transaction associated with this TxnDatas resource. */
export type TxnsDatasModelTxn = string | TxnsResponse;

export const txnsDatasModelTxnSchema: Schema<TxnsDatasModelTxn> = s.of<TxnsDatasModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
