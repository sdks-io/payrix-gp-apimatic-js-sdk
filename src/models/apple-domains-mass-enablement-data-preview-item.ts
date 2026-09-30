import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppleDomainsMassEnablementDataPreviewItem = {
  /**
   * The Payrix Pro Merchant ID associated with the domain or domains being verified for Apple Pay.
   */
  merchantId?: string;
  /** The Fully Qualified Domain Name (FQDN) associated with the registered Merchant. */
  domain?: string;
};

export const appleDomainsMassEnablementDataPreviewItemSchema: Schema<AppleDomainsMassEnablementDataPreviewItem> =
  s.object<AppleDomainsMassEnablementDataPreviewItem>({
    merchantId: s.optional(s.string()),
    domain: s.optional(s.string()),
  });
