import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The ID of the Merchant associated with this Customer. */
export type CustomersModelMerchant = string | MerchantsResponse;

export const customersModelMerchantSchema: Schema<CustomersModelMerchant> = s.of<CustomersModelMerchant>(
  s.union([s.string(), s.lazy(() => merchantsResponseSchema)]),
);
