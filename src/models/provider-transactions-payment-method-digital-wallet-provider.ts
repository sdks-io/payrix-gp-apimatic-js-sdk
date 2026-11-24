import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Identifies the digital wallet provider to the payer. */
export const ProviderTransactionsPaymentMethodDigitalWalletProvider = {
  Applepay: "APPLEPAY",
  GooglePay: "GOOGLE_PAY",
  ClickToPay: "CLICK_TO_PAY",
  Konek: "KONEK",
} as const;
export type ProviderTransactionsPaymentMethodDigitalWalletProvider =
  | (typeof ProviderTransactionsPaymentMethodDigitalWalletProvider)[keyof typeof ProviderTransactionsPaymentMethodDigitalWalletProvider]
  | (string & {});

export const providerTransactionsPaymentMethodDigitalWalletProviderSchema: EnumSchema<ProviderTransactionsPaymentMethodDigitalWalletProvider> =
  s.enumOf<ProviderTransactionsPaymentMethodDigitalWalletProvider>(
    ProviderTransactionsPaymentMethodDigitalWalletProvider,
  );
