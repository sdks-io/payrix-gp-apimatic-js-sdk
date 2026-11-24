import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A string used to identify the payment method provider being used to execute this transaction. */
export const ProviderTransactionsPaymentMethodApmProvider = {
  Testpay: "TESTPAY",
  Paypal: "PAYPAL",
  Sofort: "SOFORT",
  Ideal: "IDEAL",
  Giropay: "GIROPAY",
  OpenBanking: "OPEN_BANKING",
  Alipay: "ALIPAY",
  Wechat: "WECHAT",
  Blik: "BLIK",
  BankPayment: "BANK_PAYMENT",
  Eraty: "ERATY",
} as const;
export type ProviderTransactionsPaymentMethodApmProvider =
  | (typeof ProviderTransactionsPaymentMethodApmProvider)[keyof typeof ProviderTransactionsPaymentMethodApmProvider]
  | (string & {});

export const providerTransactionsPaymentMethodApmProviderSchema: EnumSchema<ProviderTransactionsPaymentMethodApmProvider> =
  s.enumOf<ProviderTransactionsPaymentMethodApmProvider>(ProviderTransactionsPaymentMethodApmProvider);
