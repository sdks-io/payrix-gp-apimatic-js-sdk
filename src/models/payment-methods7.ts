import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentMethods7 = {
  Card: "CARD",
  DigitalWallet: "DIGITAL_WALLET",
  Apm: "APM",
  BankTransfer: "BANK_TRANSFER",
  Bnpl: "BNPL",
  NetworkToken: "NETWORK_TOKEN",
} as const;
export type PaymentMethods7 = (typeof PaymentMethods7)[keyof typeof PaymentMethods7] | (string & {});

export const paymentMethods7Schema: EnumSchema<PaymentMethods7> = s.enumOf<PaymentMethods7>(PaymentMethods7);
