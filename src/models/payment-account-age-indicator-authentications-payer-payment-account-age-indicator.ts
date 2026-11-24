import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Length of time the customer has had an account with the merchant.
 * * `NO_ACCOUNT`
 * * `THIS_TRANSACTION`
 * * `LESS_THAN_THIRTY_DAYS`
 * * `THIRTY_TO_SIXTY_DAYS`
 * * `MORE_THAN_SIXTY_DAYS`
 */
export const PaymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicator = {
  NoAccount: "NO_ACCOUNT",
  ThisTransaction: "THIS_TRANSACTION",
  LessThanThirtyDays: "LESS_THAN_THIRTY_DAYS",
  ThirtyToSixtyDays: "THIRTY_TO_SIXTY_DAYS",
  MoreThanSixtyDays: "MORE_THAN_SIXTY_DAYS",
} as const;
export type PaymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicator =
  | (typeof PaymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicator)[keyof typeof PaymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicator]
  | (string & {});

export const paymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicatorSchema: EnumSchema<PaymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicator> =
  s.enumOf<PaymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicator>(
    PaymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicator,
  );
