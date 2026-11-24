import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates that a redirect to the payment method is not required. Some payment methods (for
 * example, SEPA Direct Debit) provide the option to redirect the customer to a page to display
 * additional information about the payment.
 */
export const OptionalRedirectTransactionsPaymentMethodApmOptionalRedirect = {
  _0: "0",
  _1: "1",
} as const;
export type OptionalRedirectTransactionsPaymentMethodApmOptionalRedirect =
  | (typeof OptionalRedirectTransactionsPaymentMethodApmOptionalRedirect)[keyof typeof OptionalRedirectTransactionsPaymentMethodApmOptionalRedirect]
  | (string & {});

export const optionalRedirectTransactionsPaymentMethodApmOptionalRedirectSchema: EnumSchema<OptionalRedirectTransactionsPaymentMethodApmOptionalRedirect> =
  s.enumOf<OptionalRedirectTransactionsPaymentMethodApmOptionalRedirect>(
    OptionalRedirectTransactionsPaymentMethodApmOptionalRedirect,
  );
