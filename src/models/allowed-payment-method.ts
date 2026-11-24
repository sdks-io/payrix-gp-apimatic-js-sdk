import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AllowedPaymentMethod = {
  Blik: "BLIK",
  BankPayment: "BANK_PAYMENT",
  Card: "CARD",
} as const;
export type AllowedPaymentMethod =
  | (typeof AllowedPaymentMethod)[keyof typeof AllowedPaymentMethod]
  | (string & {});

export const allowedPaymentMethodSchema: EnumSchema<AllowedPaymentMethod> =
  s.enumOf<AllowedPaymentMethod>(AllowedPaymentMethod);
