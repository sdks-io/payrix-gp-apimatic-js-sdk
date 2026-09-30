import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifies of the Merchant requesting the tax document. */
export type TaxFormRequestsModelMerchant = string | MerchantsResponse;

export const taxFormRequestsModelMerchantSchema: Schema<TaxFormRequestsModelMerchant> =
  s.of<TaxFormRequestsModelMerchant>(s.union([s.string(), s.lazy(() => merchantsResponseSchema)]));
