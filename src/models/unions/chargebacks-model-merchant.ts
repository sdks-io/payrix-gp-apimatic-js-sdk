import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The ID of the merchant associated with the Chargeback. */
export type ChargebacksModelMerchant = string | MerchantsResponse;

export const chargebacksModelMerchantSchema: Schema<ChargebacksModelMerchant> =
  s.of<ChargebacksModelMerchant>(s.union([s.string(), s.lazy(() => merchantsResponseSchema)]));
