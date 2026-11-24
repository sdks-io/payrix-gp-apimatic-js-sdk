import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the behaviour of the payment method token.
 * * `SINGLE` - When creating the payment method token, this indicates it is temporary and will be
 *   removed once a transaction is executed or after a short period of time
 * * `MULTIPLE` - When creating the payment method token, this indicates it is permanent and can be
 *   used to create many transactions.
 * * `USE_CARD_NUMBER` - When using the payment method token to transaction process, this indicates
 *   to use the card number also known as the PAN or FPAN.
 * * `USE_NETWORK_TOKEN` - When using the payment method token to transaction process, this
 *   indicates to use the network token instead of the card number.
 */
export const UsageModeTransactionsPaymentMethodUsageMode = {
  Single: "SINGLE",
  Multiple: "MULTIPLE",
  UseCardNumber: "USE_CARD_NUMBER",
  UseNetworkToken: "USE_NETWORK_TOKEN",
} as const;
export type UsageModeTransactionsPaymentMethodUsageMode =
  | (typeof UsageModeTransactionsPaymentMethodUsageMode)[keyof typeof UsageModeTransactionsPaymentMethodUsageMode]
  | (string & {});

export const usageModeTransactionsPaymentMethodUsageModeSchema: EnumSchema<UsageModeTransactionsPaymentMethodUsageMode> =
  s.enumOf<UsageModeTransactionsPaymentMethodUsageMode>(UsageModeTransactionsPaymentMethodUsageMode);
