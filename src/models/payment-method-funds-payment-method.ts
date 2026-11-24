import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The payment method available to create transactions with.
 * * `BANK_TRANSFER` - Indicates to transfer funds to or from the connected payout bank account.
 *
 *  * `CARD` - Indicates to transfer funds to the "Funds Payout Card."
 */
export const PaymentMethodFundsPaymentMethod = {
  BankTransfer: "BANK_TRANSFER",
  Card: "CARD",
} as const;
export type PaymentMethodFundsPaymentMethod =
  | (typeof PaymentMethodFundsPaymentMethod)[keyof typeof PaymentMethodFundsPaymentMethod]
  | (string & {});

export const paymentMethodFundsPaymentMethodSchema: EnumSchema<PaymentMethodFundsPaymentMethod> =
  s.enumOf<PaymentMethodFundsPaymentMethod>(PaymentMethodFundsPaymentMethod);
