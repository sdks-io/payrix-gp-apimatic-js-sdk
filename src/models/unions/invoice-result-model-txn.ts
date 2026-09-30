import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the Transaction associated with this invoiceResult resource. */
export type InvoiceResultModelTxn = string | TxnsResponse;

export const invoiceResultModelTxnSchema: Schema<InvoiceResultModelTxn> = s.of<InvoiceResultModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);
