import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TxnDatasPostRequest = {
  /** The identifier of the Transaction associated with this TxnDatas resource. */
  txn: string;
  /** The Base64 encoded image of the signature captured at the time of entering the Transaction. */
  signature: string;
};

export const txnDatasPostRequestSchema: Schema<TxnDatasPostRequest> = s.object<TxnDatasPostRequest>({
  txn: s.string(),
  signature: s.string(),
});
