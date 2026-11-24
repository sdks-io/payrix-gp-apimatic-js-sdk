import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action7InternalSchema, action7Schema, type Action7 } from "./action7.js";
import { statusAccountsStatusSchema, type StatusAccountsStatus } from "./status-accounts-status.js";
import { typeAccountsTypeSchema, type TypeAccountsType } from "./type-accounts-type.js";

export type EditAccountNotification2 = {
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. It can
   * begin with one of the following the three letters combinations. Each one representing a
   * different account type and capability. TRA - Transaction Processing TKA - Tokenization DIA -
   * Dispute Management DAA - Data Services MMA - Merchant Management FPA - File Processing FMA -
   * Funds Management RAA - Risk Assessment
   */
  id?: string;
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
  /**
   * GP API platform date and time that indicates when this instance of a platform configuration was
   * created.
   */
  timeCreated?: Date;
  /**
   * GP API platform date and time that indicates when this instance of a platform configuration was
   * last updated.
   */
  timeLastUpdated?: Date;
  /** A further desctiption of the status of a account. */
  statusDescription?: string;
  action?: Action7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const editAccountNotification2Properties: s.Shape<EditAccountNotification2> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusAccountsStatusSchema)),
  type: s.optional(s.lazy(() => typeAccountsTypeSchema)),
  timeCreated: s.optional(s.dateTime()),
  timeLastUpdated: s.optional(s.dateTime()),
  statusDescription: s.optional(s.string()),
  action: s.optional(s.lazy(() => action7InternalSchema)),
  _keysMap: {
    timeCreated: "time_created",
    timeLastUpdated: "time_last_updated",
    statusDescription: "status_description",
  },
};

export const editAccountNotification2InternalSchema: Schema<EditAccountNotification2> =
  s.object<EditAccountNotification2>(editAccountNotification2Properties, { additionalProperties: s.json() });

export const editAccountNotification2Schema: Schema<EditAccountNotification2> = s.lazySchema(() =>
  s.object<EditAccountNotification2>(
    {
      ...editAccountNotification2Properties,
      action: s.optional(s.lazy(() => action7Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
