import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where a transaction is in its lifecycle. * INITIATED - A Transaction has been
 * successfully initiated. An update on its status is expected via a separate asynchronous
 * notification to a webhook. * PENDING - A Transaction has been sent to the payment method provider
 * and are waiting for a result. * PREAUTHORIZED - A Transaction has been approved but a capture
 * request is required to commence the movement of funds. * CAPTURED - A Transaction has been
 * successfully authorized and captured. The funding process will commence once the transaction
 * remains in this status. * REVERSED - A Transaction that had a status of PENDING, PREAUTHORIZED or
 * CAPTURED has subsequently been reversed which voids/cancels a transaction before it is funded. *
 * DECLINED - A Transaction where the payment method provider declined the transfer of funds between
 * the payer and the merchant. * FUNDED - A Transaction where the funds have transferred between
 * payer and merchant as expected. * REJECTED - A Transaction where the funds were expected to
 * transfer between payer and merchant but the transfer was rejected during the funding process.
 * This rarely happens but when it does it is usually addressed by Global Payments operations.
 */
export const StatusLinksTransactionsStatus = {
  Initiated: "INITIATED",
  Preauthorized: "PREAUTHORIZED",
  Captured: "CAPTURED",
  Reversed: "REVERSED",
  Declined: "DECLINED",
  Funded: "FUNDED",
  Rejected: "REJECTED",
} as const;
export type StatusLinksTransactionsStatus =
  | (typeof StatusLinksTransactionsStatus)[keyof typeof StatusLinksTransactionsStatus]
  | (string & {});

export const statusLinksTransactionsStatusSchema: EnumSchema<StatusLinksTransactionsStatus> =
  s.enumOf<StatusLinksTransactionsStatus>(StatusLinksTransactionsStatus);
