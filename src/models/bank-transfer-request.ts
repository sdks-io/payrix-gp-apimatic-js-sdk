import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderTypeSchema,
  type AccountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderType,
} from "./account-holder-type-transactions-payment-method-bank-transfer-account-holder-type.js";
import {
  accountTypeTransactionsPaymentMethodBankTransferAccountTypeSchema,
  type AccountTypeTransactionsPaymentMethodBankTransferAccountType,
} from "./account-type-transactions-payment-method-bank-transfer-account-type.js";
import { bank5InternalSchema, bank5Schema, type Bank5 } from "./bank5.js";
import {
  secCodeTransactionsPaymentMethodBankTransferSecCodeSchema,
  type SecCodeTransactionsPaymentMethodBankTransferSecCode,
} from "./sec-code-transactions-payment-method-bank-transfer-sec-code.js";

export type BankTransferRequest = {
  /** The number or reference for the payer's bank account. */
  accountNumber?: string;
  /** Indicates the category of the bank account */
  accountHolderType?: AccountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderType;
  /** The number or reference for the check. */
  checkReference?: string;
  /**
   * Indicates how the transaction was authorized by the merchant.
   * * CCD - Cash Concentration or Disbursement - Can be either a credit or debit application where
   *   funds are wither distributed or consolidated between corporate entities.
   * * POP - Point of Sale Entry - Point of sale debit applications non-shared (POS) environment.
   *   These transactions are most often initiated by the consumer via a plastic access card. This
   *   is only support for normal ACH transactions
   * * PPD - Prearranged Payment and Deposits - used to credit or debit a consumer account.
   *   Popularity used for payroll direct deposits and pre-authorized bill payments.
   * * TEL - Telephone-Initiated Entry - Used for the origination of a single entry debit
   *   transaction to a consumer's account pursuant to a verbal authorization obtained from the
   *   consumer via the telephone.
   * * WEB - Internet (Web)-Initiated Entry - Used for the origination of debit entries (either
   *   Single or Recurring Entry) to a consumer's account pursuant to a to an authorization that is
   *   obtained from the Receiver via the Internet.
   */
  secCode?: SecCodeTransactionsPaymentMethodBankTransferSecCode;
  /** The type of bank account associated with the payer's bank account. */
  accountType?: AccountTypeTransactionsPaymentMethodBankTransferAccountType;
  bank?: Bank5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bankTransferRequestProperties: s.Shape<BankTransferRequest> = {
  accountNumber: s.optional(s.string()),
  accountHolderType: s.optional(
    s.lazy(() => accountHolderTypeTransactionsPaymentMethodBankTransferAccountHolderTypeSchema),
  ),
  checkReference: s.optional(s.string()),
  secCode: s.optional(s.lazy(() => secCodeTransactionsPaymentMethodBankTransferSecCodeSchema)),
  accountType: s.optional(s.lazy(() => accountTypeTransactionsPaymentMethodBankTransferAccountTypeSchema)),
  bank: s.optional(s.lazy(() => bank5InternalSchema)),
  _keysMap: {
    accountNumber: "account_number",
    accountHolderType: "account_holder_type",
    checkReference: "check_reference",
    secCode: "sec_code",
    accountType: "account_type",
  },
};

export const bankTransferRequestInternalSchema: Schema<BankTransferRequest> = s.object<BankTransferRequest>(
  bankTransferRequestProperties,
  { additionalProperties: s.json() },
);

export const bankTransferRequestSchema: Schema<BankTransferRequest> = s.lazySchema(() =>
  s.object<BankTransferRequest>(
    {
      ...bankTransferRequestProperties,
      bank: s.optional(s.lazy(() => bank5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
