import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifier of the Merchant that this assessment resource refers to. */
export type AssessmentsModelMerchant = string | MerchantsResponse;

export const assessmentsModelMerchantSchema: Schema<AssessmentsModelMerchant> =
  s.of<AssessmentsModelMerchant>(s.union([s.string(), s.lazy(() => merchantsResponseSchema)]));
