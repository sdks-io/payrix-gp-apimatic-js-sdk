import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { merchantsResponseSchema, type MerchantsResponse } from "../merchants-response.js";

/** The identifier of the Merchant associated with this Member. */
export type MembersModelMerchant = string | MerchantsResponse;

export const membersModelMerchantSchema: Schema<MembersModelMerchant> = s.of<MembersModelMerchant>(
  s.union([s.string(), s.lazy(() => merchantsResponseSchema)]),
);
