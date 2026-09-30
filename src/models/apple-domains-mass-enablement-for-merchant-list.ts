import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appleDomainsMassEnablementMerchantListResultSchema,
  type AppleDomainsMassEnablementMerchantListResult,
} from "./apple-domains-mass-enablement-merchant-list-result.js";

export type AppleDomainsMassEnablementForMerchantList = {
  response?: AppleDomainsMassEnablementMerchantListResult[];
};

export const appleDomainsMassEnablementForMerchantListSchema: Schema<AppleDomainsMassEnablementForMerchantList> =
  s.object<AppleDomainsMassEnablementForMerchantList>({
    response: s.optional(s.array(s.lazy(() => appleDomainsMassEnablementMerchantListResultSchema))),
  });
