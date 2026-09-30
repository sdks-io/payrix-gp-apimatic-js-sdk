import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifier of the Merchant that is associated with this Batch. */
export type BatchesModelMerchant = string | MerchantsResponse;

export const batchesModelMerchantSchema: Schema<BatchesModelMerchant> = s.of<BatchesModelMerchant>(
  s.union([s.string(), s.lazy(() => merchantsResponseSchema)]),
);
