import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980CSchema,
  type BillingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980C,
} from "./billing-address-required-links-order-payment-method-configuration-authentication-billing-b781980-c.js";
import {
  exemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatusSchema,
  type ExemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatus,
} from "./exempt-status-links-order-payment-method-configuration-authentication-exempt-status.js";
import {
  preferenceLinksOrderPaymentMethodConfigurationAuthenticationPreferenceSchema,
  type PreferenceLinksOrderPaymentMethodConfigurationAuthenticationPreference,
} from "./preference-links-order-payment-method-configuration-authentication-preference.js";

export type Authentication10 = {
  /**
   * Indicates whether a challenge is requested for this transaction. The Issuer may override
   * whatever preference is specified in this field. Allowed values please refer to authentication
   * specification
   */
  preference?: PreferenceLinksOrderPaymentMethodConfigurationAuthenticationPreference;
  /**
   * Indicates if any exemptions apply to this transaction in the case of HOSTED_PAYMENT_PAGE type
   * transactions.
   * * `LOW_VALUE` - Transactions up to 30 EUR (or converted equivalent) can be exempted from SCA
   *   (Strong Customer Authentication), dependent on the following criteria: Up to a maximum of
   *   five (5) consecutive transactions. Or, up to a cumulative limit of 100 EUR (or converted
   *   equivalent)*
   */
  exemptStatus?: ExemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatus;
  /**
   * This flag is set by the merchant to indicate if the billing address for 3DS authentication of a
   * transaction can be skipped.
   */
  billingAddressRequired?: BillingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980C;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authentication10Schema: Schema<Authentication10> = s.object<Authentication10>(
  {
    preference: s.optional(
      s.lazy(() => preferenceLinksOrderPaymentMethodConfigurationAuthenticationPreferenceSchema),
    ),
    exemptStatus: s.optional(
      s.lazy(() => exemptStatusLinksOrderPaymentMethodConfigurationAuthenticationExemptStatusSchema),
    ),
    billingAddressRequired: s.optional(
      s.lazy(() =>
        billingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980CSchema,
      ),
    ),
    _keysMap: {
      exemptStatus: "exempt_status",
      billingAddressRequired: "billing_address_required",
    },
  },
  { additionalProperties: s.json() },
);
