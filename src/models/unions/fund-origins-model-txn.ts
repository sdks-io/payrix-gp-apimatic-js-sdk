import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the Transaction that this fund origin relates to. */
export type FundOriginsModelTxn = string | TxnsResponse;

export const fundOriginsModelTxnSchema: Schema<FundOriginsModelTxn> = s.of<FundOriginsModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
