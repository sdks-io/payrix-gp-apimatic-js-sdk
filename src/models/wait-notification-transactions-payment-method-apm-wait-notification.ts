import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates to instruct the payer to wait for an update at the time the transaction is being
 * executed or that an update will be given later.
 */
export const WaitNotificationTransactionsPaymentMethodApmWaitNotification = {
  _0: "0",
  _1: "1",
} as const;
export type WaitNotificationTransactionsPaymentMethodApmWaitNotification =
  | (typeof WaitNotificationTransactionsPaymentMethodApmWaitNotification)[keyof typeof WaitNotificationTransactionsPaymentMethodApmWaitNotification]
  | (string & {});

export const waitNotificationTransactionsPaymentMethodApmWaitNotificationSchema: EnumSchema<WaitNotificationTransactionsPaymentMethodApmWaitNotification> =
  s.enumOf<WaitNotificationTransactionsPaymentMethodApmWaitNotification>(
    WaitNotificationTransactionsPaymentMethodApmWaitNotification,
  );
