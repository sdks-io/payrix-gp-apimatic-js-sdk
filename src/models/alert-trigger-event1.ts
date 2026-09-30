import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The event type that triggers the associated Alert.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `create` - **Triggers when the associated resource is created.**
 * - `update` - **Triggers when the associated resource is updated.**
 * - `delete` - **Triggers when the associated resource is deleted.**
 * - `ownership` - **Triggers when the ownership of the associated resource changes.**
 * - `batch` - **Triggers when Transactions are captured in a batch.**
 * - `account` - **Triggers when the Account associated with a Merchant is updated.**
 * - `account.created` - **Triggers when the Account is created.**
 * - `account.updated` - **Triggers when the Account is updated.**
 * - `payout` - **Triggers when a Payout occurs.**
 * - `fee` - **Triggers when an Entity is charged a Fee.**
 * - `changerequest.declined` - **Triggers when change request declined.**
 * - `changerequest.created` - **Triggers when change request created.**
 * - `changerequest.approved` - **Triggers when change request approved.**
 * - `changerequest.manualReview` - **Triggers when change request reviewed manually.**
 * - `chargeback` - **Triggers alert when Chargeback Reports are created.**
 * - `chargeback.opened` - **Triggers alert when Chargeback opened.**
 * - `chargeback.closed` - **Triggers alert when Chargeback closed.**
 * - `chargeback.created` - **Triggers alert when a Chargeback is created.**
 * - `chargeback.lost` - **Triggers alert when a Chargeback dispute was lost.**
 * - `chargeback.won` - **Triggers alert when a Chargeback dispute was won.**
 * - `chargebackdocument.uploaded` - **Triggers alert when Chargeback document uploaded.**
 * - `debit.disbursement.recovery` - **Triggers when the entity recovers from a negative balance and
 *   now has a positive balance again and the debtorEntity record is deleted.**
 * - `disbursement.requested` - **Triggers alert when a Disbursement is requested.**
 * - `disbursement.processing` - **Triggers alert when a Disbursement is processing.**
 * - `disbursement.processed` - **Triggers alert when a Disbursement has been processed.**
 * - `disbursement.failed` - **Triggers alert when a Disbursement has failed.**
 * - `disbursement.denied` - **Triggers alert when a Disbursement has been denied.**
 * - `disbursement.report` - **Triggers alert when Disbursements are processed.**
 * - `disbursement.returned` - **Triggers alert when Disbursement has returned.**
 * - `disbursementEntries.processed` - **Triggers alert when Disbursement Entries have been
 *   processed.**
 * - `invoice.created` - **Triggers alert when an invoice has been created.**
 * - `invoice.cancelled` - **Triggers alert when an invoice has been cancelled.**
 * - `invoice.emailed` - **Triggers alert when an invoice has been emailed.**
 * - `invoice.expired` - **Triggers alert when an invoice has expired.**
 * - `invoice.paid` - **Triggers alert when an invoice has been paid.**
 * - `invoice.refunded` - **Triggers alert when an invoice has been refunded.**
 * - `invoice.viewed` - **Triggers alert when an invoice has been viewed.**
 * - `invoiceResult.failure` - **Triggers alert when an invoice result has failed.**
 * - `merchant.created` - **Triggers alert when a Merchant has been created.**
 * - `merchant.boarding` - **Triggers alert when a Merchant is boarding.**
 * - `merchant.boarded` - **Triggers alert when a Merchant has been boarded.**
 * - `merchant.closed` - **Triggers alert when a Merchant is closed.**
 * - `merchant.conditionally.approved` - **Triggers alert when a Merchant is conditionally
 *   approved.**
 * - `merchant.fully.boarded` - **Triggers alert when a Merchant is fully boarded after being
 *   conditionally approved.**
 * - `merchant.pending` - **Triggers alert when a Merchant is pending.**
 * - `merchant.reserved` - **Triggers alert when a Merchant is reserved after being conditionally
 *   approved.**
 * - `merchant.incomplete` - **Triggers alert when a Merchant is incomplete.**
 * - `merchant.failed` - **Triggers alert when Merchant boarding has failed.**
 * - `merchant.held` - **Triggers alert when a Merchant boarding requires manual review.**
 * - `message.created` - **Triggers alert when a Message was created.**
 * - `paymentupdate.report` - **Triggers when a report for a paymentUpdate is generated.**
 * - `resource.created` - **Triggers alert when a Resource was created.**
 * - `resource.updated` - **Triggers alert when a Resource was updated.**
 * - `subscription.created` - **Triggers alert when a Subscription was created.**
 * - `subscription.approved` - **Triggers alert when a Subscription was approved.**
 * - `subscription.failed` - **Triggers alert when a Subscription has failed.**
 * - `terminalTxn.created` - **Triggers alert when Terminal Transaction has been created.**
 * - `terminalTxn.approved` - **Triggers alert when Terminal Transaction has been approved.**
 * - `terminalTxn.failed` - **Triggers alert when Terminal Transaction has failed.**
 * - `txn.created` - **Triggers alert when a Transaction is created.**
 * - `txn.approved` - **Triggers alert when a Transaction has been approved.**
 * - `txn.failed` - **Triggers alert when a Transaction has failed.**
 * - `txn.captured` - **Triggers alert when a Transaction has been captured.**
 * - `txn.settled` - **Triggers alert when a Transaction has been settled.**
 * - `txn.returned` - **Triggers alert when a Transaction has been returned.**
 * - `txn.echeck.funded` - **Triggers alert when a Transaction has been eCheck funded.**
 * - `txn.delayed.funding` - **Triggers alert when a Transaction delayed funding.**
 * - `upcoming.debit.disbursement` - **Triggers alert for upcoming debit disbursement.**
 *
 * </details>
 */
export const AlertTriggerEvent1 = {
  Create: "create",
  Update: "update",
  Delete: "delete",
  Ownership: "ownership",
  Batch: "batch",
  Account: "account",
  AccountCreated: "account.created",
  AccountUpdated: "account.updated",
  Payout: "payout",
  Fee: "fee",
  ChangerequestDeclined: "changerequest.declined",
  ChangerequestCreated: "changerequest.created",
  ChangerequestApproved: "changerequest.approved",
  ChangerequestManualReview: "changerequest.manualReview",
  Chargeback: "chargeback",
  ChargebackOpened: "chargeback.opened",
  ChargebackClosed: "chargeback.closed",
  ChargebackCreated: "chargeback.created",
  ChargebackLost: "chargeback.lost",
  ChargebackWon: "chargeback.won",
  ChargebackdocumentUploaded: "chargebackdocument.uploaded",
  DebitDisbursementRecovery: "debit.disbursement.recovery",
  DisbursementRequested: "disbursement.requested",
  DisbursementProcessing: "disbursement.processing",
  DisbursementProcessed: "disbursement.processed",
  DisbursementFailed: "disbursement.failed",
  DisbursementDenied: "disbursement.denied",
  DisbursementReport: "disbursement.report",
  DisbursementReturned: "disbursement.returned",
  DisbursementEntriesProcessed: "disbursementEntries.processed",
  InvoiceCreated: "invoice.created",
  InvoiceCancelled: "invoice.cancelled",
  InvoiceEmailed: "invoice.emailed",
  InvoiceExpired: "invoice.expired",
  InvoicePaid: "invoice.paid",
  InvoiceRefunded: "invoice.refunded",
  InvoiceViewed: "invoice.viewed",
  InvoiceResultFailure: "invoiceResult.failure",
  MerchantCreated: "merchant.created",
  MerchantBoarding: "merchant.boarding",
  MerchantBoarded: "merchant.boarded",
  MerchantClosed: "merchant.closed",
  MerchantConditionallyApproved: "merchant.conditionally.approved",
  MerchantFullyBoarded: "merchant.fully.boarded",
  MerchantPending: "merchant.pending",
  MerchantReserved: "merchant.reserved",
  MerchantIncomplete: "merchant.incomplete",
  MerchantFailed: "merchant.failed",
  MerchantHeld: "merchant.held",
  MessageCreated: "message.created",
  PaymentupdateReport: "paymentupdate.report",
  ResourceCreated: "resource.created",
  ResourceUpdated: "resource.updated",
  SubscriptionCreated: "subscription.created",
  SubscriptionApproved: "subscription.approved",
  SubscriptionFailed: "subscription.failed",
  TerminalTxnCreated: "terminalTxn.created",
  TerminalTxnApproved: "terminalTxn.approved",
  TerminalTxnFailed: "terminalTxn.failed",
  TxnCreated: "txn.created",
  TxnApproved: "txn.approved",
  TxnFailed: "txn.failed",
  TxnCaptured: "txn.captured",
  TxnSettled: "txn.settled",
  TxnReturned: "txn.returned",
  TxnEcheckFunded: "txn.echeck.funded",
  TxnDelayedFunding: "txn.delayed.funding",
  UpcomingDebitDisbursement: "upcoming.debit.disbursement",
} as const;
export type AlertTriggerEvent1 = (typeof AlertTriggerEvent1)[keyof typeof AlertTriggerEvent1] | (string & {});

export const alertTriggerEvent1Schema: EnumSchema<AlertTriggerEvent1> =
  s.enumOf<AlertTriggerEvent1>(AlertTriggerEvent1);
