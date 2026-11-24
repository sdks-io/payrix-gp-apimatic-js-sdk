import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates who initiated the payment method code to execute the transaction.
 * * `PAYER` - The consumer who is paying the merchant.
 * * `MERCHANT` - The business who is providing goods or services to the payer.
 */
export const PaymentCodeInitiatorTransactionsPaymentMethodApmPaymentCodeInitiator = {
  Payer: "PAYER",
  Merchant: "MERCHANT",
} as const;
export type PaymentCodeInitiatorTransactionsPaymentMethodApmPaymentCodeInitiator =
  | (typeof PaymentCodeInitiatorTransactionsPaymentMethodApmPaymentCodeInitiator)[keyof typeof PaymentCodeInitiatorTransactionsPaymentMethodApmPaymentCodeInitiator]
  | (string & {});

export const paymentCodeInitiatorTransactionsPaymentMethodApmPaymentCodeInitiatorSchema: EnumSchema<PaymentCodeInitiatorTransactionsPaymentMethodApmPaymentCodeInitiator> =
  s.enumOf<PaymentCodeInitiatorTransactionsPaymentMethodApmPaymentCodeInitiator>(
    PaymentCodeInitiatorTransactionsPaymentMethodApmPaymentCodeInitiator,
  );
