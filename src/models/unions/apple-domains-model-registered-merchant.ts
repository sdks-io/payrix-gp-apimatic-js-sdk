import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifier of the Merchant registered with Apple Pay for this domain. */
export type AppleDomainsModelRegisteredMerchant = string | MerchantsResponse;

export const appleDomainsModelRegisteredMerchantSchema: Schema<AppleDomainsModelRegisteredMerchant> =
  s.of<AppleDomainsModelRegisteredMerchant>(s.union([s.string(), s.lazy(() => merchantsResponseSchema)]));
