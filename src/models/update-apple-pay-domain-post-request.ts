import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateApplePayDomainPostRequest = {
  /** The Fully Qualified Domain Name (FQDN) associated with the registered Merchant. */
  domain?: string;
};

export const updateApplePayDomainPostRequestSchema: Schema<UpdateApplePayDomainPostRequest> =
  s.object<UpdateApplePayDomainPostRequest>({
    domain: s.optional(s.string()),
  });
