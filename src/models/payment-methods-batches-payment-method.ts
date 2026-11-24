import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentMethodsBatchesPaymentMethod = {
  Card: "CARD",
  DigitalWallet: "DIGITAL_WALLET",
  Apm: "APM",
  BankTransfer: "BANK_TRANSFER",
  Bnpl: "BNPL",
  NetworkToken: "NETWORK_TOKEN",
} as const;
export type PaymentMethodsBatchesPaymentMethod =
  | (typeof PaymentMethodsBatchesPaymentMethod)[keyof typeof PaymentMethodsBatchesPaymentMethod]
  | (string & {});

export const paymentMethodsBatchesPaymentMethodSchema: EnumSchema<PaymentMethodsBatchesPaymentMethod> =
  s.enumOf<PaymentMethodsBatchesPaymentMethod>(PaymentMethodsBatchesPaymentMethod);
