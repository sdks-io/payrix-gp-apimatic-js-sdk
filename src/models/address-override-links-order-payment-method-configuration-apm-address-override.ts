import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines whether the shipping address can be changed by the customer on the PayPal review page
 */
export const AddressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverride = {
  Yes: "YES",
  No: "NO",
} as const;
export type AddressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverride =
  | (typeof AddressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverride)[keyof typeof AddressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverride]
  | (string & {});

export const addressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverrideSchema: EnumSchema<AddressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverride> =
  s.enumOf<AddressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverride>(
    AddressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverride,
  );
