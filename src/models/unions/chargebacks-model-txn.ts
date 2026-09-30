import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The ID of the Transaction associated with the Chargeback. */
export type ChargebacksModelTxn = string | TxnsResponse;

export const chargebacksModelTxnSchema: Schema<ChargebacksModelTxn> = s.of<ChargebacksModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
