import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifier of the Merchant of this invoice resource. */
export type InvoicesModelMerchant = string | MerchantsResponse;

export const invoicesModelMerchantSchema: Schema<InvoicesModelMerchant> = s.of<InvoicesModelMerchant>(
  s.union([s.string(), s.lazy(() => merchantsResponseSchema)]),
);
