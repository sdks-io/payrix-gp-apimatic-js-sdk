import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The condition that caused the chip or POS reader to fail. When this happens, the POS device
 * offers a fallback option and provides the fallback condition.
 * * `TERMINAL_CONNECTION_ERROR` - Failure due to connection issues.The ICC and terminal could not
 *   exchange EMV data with each other to complete a flow.
 * * `CARD_COMPATIBILITY_ERROR` - Failure due to compatibiliyt issues.The ICC and terminal do not
 *   share a common AID that would have allowed a transaction to happen.
 */
export const SwipeReasonTransactionsPaymentMethodCardSwipeReason = {
  TerminalConnectionError: "TERMINAL_CONNECTION_ERROR",
  CardCompatibilityError: "CARD_COMPATIBILITY_ERROR",
} as const;
export type SwipeReasonTransactionsPaymentMethodCardSwipeReason =
  | (typeof SwipeReasonTransactionsPaymentMethodCardSwipeReason)[keyof typeof SwipeReasonTransactionsPaymentMethodCardSwipeReason]
  | (string & {});

export const swipeReasonTransactionsPaymentMethodCardSwipeReasonSchema: EnumSchema<SwipeReasonTransactionsPaymentMethodCardSwipeReason> =
  s.enumOf<SwipeReasonTransactionsPaymentMethodCardSwipeReason>(
    SwipeReasonTransactionsPaymentMethodCardSwipeReason,
  );
