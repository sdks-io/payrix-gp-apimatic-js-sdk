import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifier of the Merchant associated with this Plan. */
export type PlansModelMerchant = string | MerchantsResponse;

export const plansModelMerchantSchema: Schema<PlansModelMerchant> = s.of<PlansModelMerchant>(
  s.union([s.string(), s.lazy(() => merchantsResponseSchema)]),
);
