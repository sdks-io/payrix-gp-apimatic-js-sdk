import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This flag is set by the merchant to indicate if the billing address for 3DS authentication of a
 * transaction can be skipped.
 */
export const BillingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980C = {
  Yes: "YES",
  No: "NO",
} as const;
export type BillingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980C =
  | (typeof BillingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980C)[keyof typeof BillingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980C]
  | (string & {});

export const billingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980CSchema: EnumSchema<BillingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980C> =
  s.enumOf<BillingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980C>(
    BillingAddressRequiredLinksOrderPaymentMethodConfigurationAuthenticationBillingB781980C,
  );
