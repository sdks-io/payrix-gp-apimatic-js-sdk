import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates how the transaction was authorized by the merchant.
 * * CCD - Cash Concentration or Disbursement - Can be either a credit or debit application where
 *   funds are wither distributed or consolidated between corporate entities.
 * * POP - Point of Sale Entry - Point of sale debit applications non-shared (POS) environment.
 *   These transactions are most often initiated by the consumer via a plastic access card. This is
 *   only support for normal ACH transactions
 * * PPD - Prearranged Payment and Deposits - used to credit or debit a consumer account. Popularity
 *   used for payroll direct deposits and pre-authorized bill payments.
 * * TEL - Telephone-Initiated Entry - Used for the origination of a single entry debit transaction
 *   to a consumer's account pursuant to a verbal authorization obtained from the consumer via the
 *   telephone.
 * * WEB - Internet (Web)-Initiated Entry - Used for the origination of debit entries (either Single
 *   or Recurring Entry) to a consumer's account pursuant to a to an authorization that is obtained
 *   from the Receiver via the Internet.
 */
export const SecCodeTransactionsPaymentMethodBankTransferSecCode = {
  Ccd: "CCD",
  Pop: "POP",
  Ppd: "PPD",
  Tel: "TEL",
  Web: "WEB",
} as const;
export type SecCodeTransactionsPaymentMethodBankTransferSecCode =
  | (typeof SecCodeTransactionsPaymentMethodBankTransferSecCode)[keyof typeof SecCodeTransactionsPaymentMethodBankTransferSecCode]
  | (string & {});

export const secCodeTransactionsPaymentMethodBankTransferSecCodeSchema: EnumSchema<SecCodeTransactionsPaymentMethodBankTransferSecCode> =
  s.enumOf<SecCodeTransactionsPaymentMethodBankTransferSecCode>(
    SecCodeTransactionsPaymentMethodBankTransferSecCode,
  );
