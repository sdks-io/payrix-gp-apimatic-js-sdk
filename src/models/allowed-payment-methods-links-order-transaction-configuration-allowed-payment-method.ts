import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AllowedPaymentMethodsLinksOrderTransactionConfigurationAllowedPaymentMethod = {
  Card: "CARD",
  Blik: "BLIK",
  BankPayment: "BANK_PAYMENT",
} as const;
export type AllowedPaymentMethodsLinksOrderTransactionConfigurationAllowedPaymentMethod =
  | (typeof AllowedPaymentMethodsLinksOrderTransactionConfigurationAllowedPaymentMethod)[keyof typeof AllowedPaymentMethodsLinksOrderTransactionConfigurationAllowedPaymentMethod]
  | (string & {});

export const allowedPaymentMethodsLinksOrderTransactionConfigurationAllowedPaymentMethodSchema: EnumSchema<AllowedPaymentMethodsLinksOrderTransactionConfigurationAllowedPaymentMethod> =
  s.enumOf<AllowedPaymentMethodsLinksOrderTransactionConfigurationAllowedPaymentMethod>(
    AllowedPaymentMethodsLinksOrderTransactionConfigurationAllowedPaymentMethod,
  );
