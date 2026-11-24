import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SupportedPaymentMethodsConsentsSupportedPaymentMethod = {
  VisaCredit: "VISA_CREDIT",
  VisaDebit: "VISA_DEBIT",
  MastercardCredit: "MASTERCARD_CREDIT",
  MastercardDebit: "MASTERCARD_DEBIT",
  AmexCredit: "AMEX_CREDIT",
  BankTransferSavings: "BANK_TRANSFER_SAVINGS",
  BankTransferChecking: "BANK_TRANSFER_CHECKING",
  BankTransferLineOfCredit: "BANK_TRANSFER_LINE_OF_CREDIT",
} as const;
export type SupportedPaymentMethodsConsentsSupportedPaymentMethod =
  | (typeof SupportedPaymentMethodsConsentsSupportedPaymentMethod)[keyof typeof SupportedPaymentMethodsConsentsSupportedPaymentMethod]
  | (string & {});

export const supportedPaymentMethodsConsentsSupportedPaymentMethodSchema: EnumSchema<SupportedPaymentMethodsConsentsSupportedPaymentMethod> =
  s.enumOf<SupportedPaymentMethodsConsentsSupportedPaymentMethod>(
    SupportedPaymentMethodsConsentsSupportedPaymentMethod,
  );
