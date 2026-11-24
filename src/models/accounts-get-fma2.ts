import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action6InternalSchema, action6Schema, type Action6 } from "./action6.js";
import { capability1Schema, type Capability1 } from "./capability1.js";
import {
  paymentProcessingStatisticsSchema,
  type PaymentProcessingStatistics,
} from "./payment-processing-statistics.js";
import { permission2Schema, type Permission2 } from "./permission2.js";
import { statusAccountsStatusSchema, type StatusAccountsStatus } from "./status-accounts-status.js";
import { typeAccountsTypeSchema, type TypeAccountsType } from "./type-accounts-type.js";

export type AccountsGetFma2 = {
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. It can
   * begin with one of the following the three letters combinations. Each one representing a
   * different account type and capability. TRA - Transaction Processing TKA - Tokenization DIA -
   * Dispute Management DAA - Data Services MMA - Merchant Management FPA - File Processing FMA -
   * Funds Management RAA - Risk Assessment
   */
  id?: string;
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
  type?: TypeAccountsType;
  /** A understandable name associated with an instance of a account. */
  name?: string;
  /**
   * The overall status of the account.
   *
   * *`ACTIVE` - The entity is ACTIVE and can be used.
   *
   * *`INACTIVE` - The entity is INACTIVE and cannot be used.
   */
  status?: StatusAccountsStatus;
  /** All of the permissions or activites that may be performed by the account. */
  permissions?: Permission2[];
  /** The capabilities of a Funds Management account. */
  capabilities?: Capability1[];
  paymentProcessingStatistics?: PaymentProcessingStatistics;
  action?: Action6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountsGetFma2Properties: s.Shape<AccountsGetFma2> = {
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeAccountsTypeSchema)),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusAccountsStatusSchema)),
  permissions: s.optional(s.array(s.lazy(() => permission2Schema))),
  capabilities: s.optional(s.array(s.lazy(() => capability1Schema))),
  paymentProcessingStatistics: s.optional(s.lazy(() => paymentProcessingStatisticsSchema)),
  action: s.optional(s.lazy(() => action6InternalSchema)),
  _keysMap: {
    paymentProcessingStatistics: "payment_processing_statistics",
  },
};

export const accountsGetFma2InternalSchema: Schema<AccountsGetFma2> = s.object<AccountsGetFma2>(
  accountsGetFma2Properties,
  { additionalProperties: s.json() },
);

export const accountsGetFma2Schema: Schema<AccountsGetFma2> = s.lazySchema(() =>
  s.object<AccountsGetFma2>(
    {
      ...accountsGetFma2Properties,
      action: s.optional(s.lazy(() => action6Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
