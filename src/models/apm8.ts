import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  addressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverrideSchema,
  type AddressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverride,
} from "./address-override-links-order-payment-method-configuration-apm-address-override.js";
import {
  shippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabledSchema,
  type ShippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabled,
} from "./shipping-address-enabled-links-order-payment-method-configuration-apm-shipping-address-enabled.js";

export type Apm8 = {
  /**
   * This field determines whether the passing of PayPal shipping address details will be activated
   * or not
   */
  shippingAddressEnabled?: ShippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabled;
  /**
   * Determines whether the shipping address can be changed by the customer on the PayPal review
   * page
   */
  addressOverride?: AddressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverride;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apm8Schema: Schema<Apm8> = s.object<Apm8>(
  {
    shippingAddressEnabled: s.optional(
      s.lazy(() => shippingAddressEnabledLinksOrderPaymentMethodConfigurationApmShippingAddressEnabledSchema),
    ),
    addressOverride: s.optional(
      s.lazy(() => addressOverrideLinksOrderPaymentMethodConfigurationApmAddressOverrideSchema),
    ),
    _keysMap: {
      shippingAddressEnabled: "shipping_address_enabled",
      addressOverride: "address_override",
    },
  },
  { additionalProperties: s.json() },
);
