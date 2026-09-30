import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { txnResultType2Schema, type TxnResultType2 } from "./txn-result-type2.js";
import { txnResultsBankCode2Schema, type TxnResultsBankCode2 } from "./txn-results-bank-code2.js";
import { txnResultsCode2Schema, type TxnResultsCode2 } from "./txn-results-code2.js";
import { txn1Schema, type Txn1 } from "./txn1.js";

export type TxnResultsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  txn?: Txn1;
  type?: TxnResultType2;
  /** A message that accompanies and describes this Transaction result. */
  message?: string;
  code?: TxnResultsCode2;
  /**
   * Exact message code as received from the activation integration or from the processor for the
   * resulting transaction.
   */
  originalCode?: string;
  bankCode?: TxnResultsBankCode2;
};

export const txnResultsResponseSchema: Schema<TxnResultsResponse> = s.object<TxnResultsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  txn: s.optional(s.lazy(() => txn1Schema)),
  type: s.optional(s.lazy(() => txnResultType2Schema)),
  message: s.optional(s.string()),
  code: s.optional(s.lazy(() => txnResultsCode2Schema)),
  originalCode: s.optional(s.string()),
  bankCode: s.optional(s.lazy(() => txnResultsBankCode2Schema)),
});
