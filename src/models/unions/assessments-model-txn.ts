import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the Txn that this assessment resource refers to. */
export type AssessmentsModelTxn = string | TxnsResponse;

export const assessmentsModelTxnSchema: Schema<AssessmentsModelTxn> = s.of<AssessmentsModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
