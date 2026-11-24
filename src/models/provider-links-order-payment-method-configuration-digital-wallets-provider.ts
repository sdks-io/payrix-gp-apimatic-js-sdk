import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProviderLinksOrderPaymentMethodConfigurationDigitalWalletsProvider = {
  GooglePay: "GOOGLE_PAY",
  ApplePay: "APPLE_PAY",
  ClickToPay: "CLICK_TO_PAY",
} as const;
export type ProviderLinksOrderPaymentMethodConfigurationDigitalWalletsProvider =
  | (typeof ProviderLinksOrderPaymentMethodConfigurationDigitalWalletsProvider)[keyof typeof ProviderLinksOrderPaymentMethodConfigurationDigitalWalletsProvider]
  | (string & {});

export const providerLinksOrderPaymentMethodConfigurationDigitalWalletsProviderSchema: EnumSchema<ProviderLinksOrderPaymentMethodConfigurationDigitalWalletsProvider> =
  s.enumOf<ProviderLinksOrderPaymentMethodConfigurationDigitalWalletsProvider>(
    ProviderLinksOrderPaymentMethodConfigurationDigitalWalletsProvider,
  );
