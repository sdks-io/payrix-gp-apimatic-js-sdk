import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifier of the Merchant that owns this terminals resource. */
export type TerminalsModelMerchant = string | MerchantsResponse;

export const terminalsModelMerchantSchema: Schema<TerminalsModelMerchant> = s.of<TerminalsModelMerchant>(
  s.union([s.string(), s.lazy(() => merchantsResponseSchema)]),
);
