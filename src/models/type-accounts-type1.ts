import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A string that identifies the capability of the account.
 * * `FUND_MANAGEMENT` - Enables the transfer of funds between different partner and merchant
 *   accounts and the movement of funds out of the Global Payments ecosystem to a bank account or
 *   debit card.
 * * `TRANSACTION_PROCESSING` - This is the most fundamental and expansive of the capabilities the
 *   platform offers. It includes authorizing, capturing, reversing, adjusting card and non card
 *   transactions, and also those activities that occur before or after transaction creation and
 *   management are directly linked to transactions, for example DCC, 3DS, Batching.
 * * `DATA_SERVICES ` - Exposes information relating to deposits, transactions, disputes and fees
 *   that affect bank accounts.
 * * `TOKENIZATION ` - This capability enables the encryption and secure storage of sensitive card
 *   details . A payment method token is produced that can be stored and used on the customers
 *   system in place of sensitive card information to process transactions.
 * * `DISPUTE_MANAGEMENT ` - This capability enables the reporting, challenging and accepting of
 *   chargebacks and retrieval requests.
 * * `MERCHANT_MANAGEMENT ` - This capability includes the underwriting and configuration of
 *   merchants on the platform with the product capability the merchant needs
 * * `RISK_ASSESSMENT` - Enables the assessment of transactions for the degree of risk associated
 *   with that transaction.
 */
export const TypeAccountsType1 = {
  FundManagement: "FUND_MANAGEMENT",
  TransactionProcessing: "TRANSACTION_PROCESSING",
  Tokenization: "TOKENIZATION",
  DataServices: "DATA_SERVICES",
  DisputeManagement: "DISPUTE_MANAGEMENT",
  MerchantManagement: "MERCHANT_MANAGEMENT",
  RiskAssessment: "RISK_ASSESSMENT",
} as const;
export type TypeAccountsType1 = (typeof TypeAccountsType1)[keyof typeof TypeAccountsType1] | (string & {});

export const typeAccountsType1Schema: EnumSchema<TypeAccountsType1> =
  s.enumOf<TypeAccountsType1>(TypeAccountsType1);
