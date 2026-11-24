import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes what capability the account relates to be it transaction processing, data services,
 * dispute management, merchant management,tokenization.
 *   * TRANSACTION_PROCESSING - indicates an account that can be used to create and manage
 *     transactions.
 *   * DATA_SERVICES - indicates an account that can be used to retrieve data.
 *   * DISPUTE_MANAGEMENT - indicates an account that can be used to manage transaction disputes.
 *   * TOKENIZATION - indicates an account that can be used to store and manage payment methods
 *     securely.
 *   * FUND_MANAGMENT - indicates an account where funds are added to and paid out from.
 *   * MERCHANT_MANAGEMENT - indicates an account that can be used to store and manage merchants and
 *     their accounts.
 */
export const DataDictionaryV1AccountType = {
  TransactionProcessing: "TRANSACTION_PROCESSING",
  DataServices: "DATA_SERVICES",
  DisputeManagement: "DISPUTE_MANAGEMENT",
  MerchantManagement: "MERCHANT_MANAGEMENT",
  Tokenization: "TOKENIZATION",
  FundManagement: "FUND_MANAGEMENT",
} as const;
export type DataDictionaryV1AccountType =
  | (typeof DataDictionaryV1AccountType)[keyof typeof DataDictionaryV1AccountType]
  | (string & {});

export const dataDictionaryV1AccountTypeSchema: EnumSchema<DataDictionaryV1AccountType> =
  s.enumOf<DataDictionaryV1AccountType>(DataDictionaryV1AccountType);
