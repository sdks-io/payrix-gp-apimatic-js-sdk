import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether Payment Account Reference (PAR) should be returned with the authorization, when
 * available
 */
export const PaymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceMode = {
  Requested: "REQUESTED",
  NotRequested: "NOT_REQUESTED",
} as const;
export type PaymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceMode =
  | (typeof PaymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceMode)[keyof typeof PaymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceMode]
  | (string & {});

export const paymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceModeSchema: EnumSchema<PaymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceMode> =
  s.enumOf<PaymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceMode>(
    PaymentAccountReferenceModeTransactionsPaymentMethodCardPaymentAccountReferenceMode,
  );
