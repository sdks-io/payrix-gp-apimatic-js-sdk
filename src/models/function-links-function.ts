import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes the function the link created can have: DEPOSIT_REPORT is a merchant report that will
 * display all transactions in a Global Payments automated sweep. UPDATE_PRIMARY_ACCOUNT is a page
 * that allows a merchant to update the primary payout bank information on an account.
 * CONFIRM_VALIDATION_DEPOSITS is a page that allows a merchant to validate the micro deposits that
 * have been deposited to the primary payout payment method on file. SEND_VALIDATION_DEPOSITS is a
 * page that allows a merchant to trigger 2 micro deposits to the primary bank account on file to
 * validate the bank account. UPDATE_PAYOUT_CARD is a page that allows a merchant to update the
 * payout card on file. FUND_PAYOUT_CARD is a page that allows amerchant to initiate a payout to the
 * payout card on file. FUND_PRIMARY_PAYOUT is a page that allows a merchant to initiate a payout to
 * the primary payout payment method on file. FMA_TRANSFER is a page that allows a merchant to send
 * funds to another merchant. CREDIT_FMA is a page that allows a merchant to pull funds from a bank
 * account into the funds management account. SCHEDULED_FUND is a page that allows a merchant to
 * schedule a funds payout to their primary payout payment method on file.
 * UPDATE_BUSINESS_INFORMATION is a page that allows a merchant to update the business information
 * associated on their merchant account. UPDATE_ADDRESS_PHONE is a page that allows a merchant to
 * update the phone and addresses associated with a merchant account. UPDATE_EMAIL is a page that
 * allows a merchant to update the primary email address associated with a merchant account.
 * PREPAID_CARD_INDEX is a page that allows a merchant to view information about their prepaid debit
 * card linked to their merchant account balance. REQUEST_PREPAID_CARD is a page that allows a
 * merchant to agree to terms and conditions and request a prepaid debit card linked to the balance
 * in a merchant account. ACTIVATE_PREPAID_CARD is a page that allows a merchant to activate a
 * prepaid debit card linked to the balance in their merchant account. LOST_PREPAID_CARD is a page
 * that allows a merchant to mark the prepaid debit card linked to their merchant balance lost or
 * stolen. UPDATE_PREPAID_CARD_PIN is a page that allows a merchant to update the 4 digit pin
 * associated with the prepaid debit card to access funds in the merchant account.
 * REISSUE_PREPAID_CARD is a page that allows a merchant to request an updated prepaid debit card to
 * access the funds in the merchant account. UPDATE_PAYMENT_METHOD is a page that allows a merchant
 * to edit/update the account activation fee payment method on file. DOCUMENT_UPLOAD is a page that
 * will allow a merchant upload documents related to merchant identity validation, underwriting and
 * risk review. CHARGEBACK_REPORT is a page that will display all active disputed transactions and
 * allow document uploads to respond to the listed disputes for a merchant.
 * ADVANCED_TRANSACTION_SEARCH is a page that allows a user to set criteria and generate a report.
 * CONSOLIDATED_FEES is a page that will show the consolidated fees for a merchant within an
 * established timeframe. LIMITS_RATES_FEES is a page that displays the processing limits and
 * processing fees on a merchant account. TRANSACTION_REPORT is a page that allows a user to view
 * all transactions within an established timeframe. GB_FEES_REPORT is a page that allows a merchant
 * to review fees they will be charged, as is required by PSR (Payment Systems Regulator).
 */
export const FunctionLinksFunction = {
  DepositReport: "DEPOSIT_REPORT",
  UpdatePrimaryAccount: "UPDATE_PRIMARY_ACCOUNT",
  ConfirmValidationDeposits: "CONFIRM_VALIDATION_DEPOSITS",
  SendValidationDeposits: "SEND_VALIDATION_DEPOSITS",
  UpdatePayoutCard: "UPDATE_PAYOUT_CARD",
  FundPayoutCard: "FUND_PAYOUT_CARD",
  FundPrimaryPayout: "FUND_PRIMARY_PAYOUT",
  FmaTransfer: "FMA_TRANSFER",
  CreditFma: "CREDIT_FMA",
  ScheduledFund: "SCHEDULED_FUND",
  UpdateBusinessInformation: "UPDATE_BUSINESS_INFORMATION",
  UpdateAddressPhone: "UPDATE_ADDRESS_PHONE",
  UpdateEmail: "UPDATE_EMAIL",
  PrepaidCardIndex: "PREPAID_CARD_INDEX",
  RequestPrepaidCard: "REQUEST_PREPAID_CARD",
  ActivatePrepaidCard: "ACTIVATE_PREPAID_CARD",
  LostPrepaidCard: "LOST_PREPAID_CARD",
  UpdatePrepaidCardPin: "UPDATE_PREPAID_CARD_PIN",
  ReissuePrepaidCard: "REISSUE_PREPAID_CARD",
  UpdatePaymentMethod: "UPDATE_PAYMENT_METHOD",
  DocumentUpload: "DOCUMENT_UPLOAD",
  ChargebackReport: "CHARGEBACK_REPORT",
  AdvancedTransactionSearch: "ADVANCED_TRANSACTION_SEARCH",
  ConsolidatedFees: "CONSOLIDATED_FEES",
  LimitsRatesFees: "LIMITS_RATES_FEES",
  TransactionReport: "TRANSACTION_REPORT",
  GbFeesReport: "GB_FEES_REPORT",
} as const;
export type FunctionLinksFunction =
  | (typeof FunctionLinksFunction)[keyof typeof FunctionLinksFunction]
  | (string & {});

export const functionLinksFunctionSchema: EnumSchema<FunctionLinksFunction> =
  s.enumOf<FunctionLinksFunction>(FunctionLinksFunction);
