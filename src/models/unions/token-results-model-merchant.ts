import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifier of the Merchant resource that this tokenResult relates to. */
export type TokenResultsModelMerchant = string | MerchantsResponse;

export const tokenResultsModelMerchantSchema: Schema<TokenResultsModelMerchant> =
  s.of<TokenResultsModelMerchant>(s.union([s.string(), s.lazy(() => merchantsResponseSchema)]));
