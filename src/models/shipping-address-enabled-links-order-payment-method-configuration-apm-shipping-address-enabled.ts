import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field determines whether the passing of PayPal shipping address details will be activated or
 * not
 */
export const ShippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabled = {
  Yes: "YES",
  No: "NO",
} as const;
export type ShippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabled =
  | (typeof ShippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabled)[keyof typeof ShippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabled]
  | (string & {});

export const shippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabledSchema: EnumSchema<ShippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabled> =
  s.enumOf<ShippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabled>(
    ShippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabled,
  );
