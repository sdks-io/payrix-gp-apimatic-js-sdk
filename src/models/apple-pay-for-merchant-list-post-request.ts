import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  appleDomainsMassEnablementDataPreviewItemSchema,
  type AppleDomainsMassEnablementDataPreviewItem,
} from "./apple-domains-mass-enablement-data-preview-item.js";

export type ApplePayForMerchantListPostRequest = {
  merchantIdDomainPairs?: AppleDomainsMassEnablementDataPreviewItem[];
};

export const applePayForMerchantListPostRequestSchema: Schema<ApplePayForMerchantListPostRequest> =
  s.object<ApplePayForMerchantListPostRequest>({
    merchantIdDomainPairs: s.optional(s.array(s.lazy(() => appleDomainsMassEnablementDataPreviewItemSchema))),
  });
