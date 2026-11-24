import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AllowedPaymentMethodsLinksTransactionsAllowedPaymentMethod = {
  Blik: "BLIK",
  BankPayment: "BANK_PAYMENT",
  Card: "CARD",
} as const;
export type AllowedPaymentMethodsLinksTransactionsAllowedPaymentMethod =
  | (typeof AllowedPaymentMethodsLinksTransactionsAllowedPaymentMethod)[keyof typeof AllowedPaymentMethodsLinksTransactionsAllowedPaymentMethod]
  | (string & {});

export const allowedPaymentMethodsLinksTransactionsAllowedPaymentMethodSchema: EnumSchema<AllowedPaymentMethodsLinksTransactionsAllowedPaymentMethod> =
  s.enumOf<AllowedPaymentMethodsLinksTransactionsAllowedPaymentMethod>(
    AllowedPaymentMethodsLinksTransactionsAllowedPaymentMethod,
  );
