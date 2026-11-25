import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { displayConfigurationSchema, type DisplayConfiguration } from "./display-configuration.js";
import { functionLinksFunctionSchema, type FunctionLinksFunction } from "./function-links-function.js";
import { imagesSchema, type Images } from "./images.js";
import { installment5InternalSchema, installment5Schema, type Installment5 } from "./installment5.js";
import {
  messageTypeLinksMessageTypeSchema,
  type MessageTypeLinksMessageType,
} from "./message-type-links-message-type.js";
import {
  notifications19InternalSchema,
  notifications19Schema,
  type Notifications19,
} from "./notifications19.js";
import { order73InternalSchema, order73Schema, type Order73 } from "./order73.js";
import { payer13InternalSchema, payer13Schema, type Payer13 } from "./payer13.js";
import { shippableLinksShippableSchema, type ShippableLinksShippable } from "./shippable-links-shippable.js";
import { transactionsInternalSchema, transactionsSchema, type Transactions } from "./transactions.js";
import { typeLinksTypeSchema, type TypeLinksType } from "./type-links-type.js";
import {
  usageModeLinksUsageModeSchema,
  type UsageModeLinksUsageMode,
} from "./usage-mode-links-usage-mode.js";

export type LinksRequest = {
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** GP API specific label that indicates the type resource an instance is. */
  type: TypeLinksType;
  /**
   * Describes the function the link created can have: DEPOSIT_REPORT is a merchant report that will
   * display all transactions in a Global Payments automated sweep. UPDATE_PRIMARY_ACCOUNT is a page
   * that allows a merchant to update the primary payout bank information on an account.
   * CONFIRM_VALIDATION_DEPOSITS is a page that allows a merchant to validate the micro deposits
   * that have been deposited to the primary payout payment method on file. SEND_VALIDATION_DEPOSITS
   * is a page that allows a merchant to trigger 2 micro deposits to the primary bank account on
   * file to validate the bank account. UPDATE_PAYOUT_CARD is a page that allows a merchant to
   * update the payout card on file. FUND_PAYOUT_CARD is a page that allows amerchant to initiate a
   * payout to the payout card on file. FUND_PRIMARY_PAYOUT is a page that allows a merchant to
   * initiate a payout to the primary payout payment method on file. FMA_TRANSFER is a page that
   * allows a merchant to send funds to another merchant. CREDIT_FMA is a page that allows a
   * merchant to pull funds from a bank account into the funds management account. SCHEDULED_FUND is
   * a page that allows a merchant to schedule a funds payout to their primary payout payment method
   * on file. UPDATE_BUSINESS_INFORMATION is a page that allows a merchant to update the business
   * information associated on their merchant account. UPDATE_ADDRESS_PHONE is a page that allows a
   * merchant to update the phone and addresses associated with a merchant account. UPDATE_EMAIL is
   * a page that allows a merchant to update the primary email address associated with a merchant
   * account. PREPAID_CARD_INDEX is a page that allows a merchant to view information about their
   * prepaid debit card linked to their merchant account balance. REQUEST_PREPAID_CARD is a page
   * that allows a merchant to agree to terms and conditions and request a prepaid debit card linked
   * to the balance in a merchant account. ACTIVATE_PREPAID_CARD is a page that allows a merchant to
   * activate a prepaid debit card linked to the balance in their merchant account.
   * LOST_PREPAID_CARD is a page that allows a merchant to mark the prepaid debit card linked to
   * their merchant balance lost or stolen. UPDATE_PREPAID_CARD_PIN is a page that allows a merchant
   * to update the 4 digit pin associated with the prepaid debit card to access funds in the
   * merchant account. REISSUE_PREPAID_CARD is a page that allows a merchant to request an updated
   * prepaid debit card to access the funds in the merchant account. UPDATE_PAYMENT_METHOD is a page
   * that allows a merchant to edit/update the account activation fee payment method on file.
   * DOCUMENT_UPLOAD is a page that will allow a merchant upload documents related to merchant
   * identity validation, underwriting and risk review. CHARGEBACK_REPORT is a page that will
   * display all active disputed transactions and allow document uploads to respond to the listed
   * disputes for a merchant. ADVANCED_TRANSACTION_SEARCH is a page that allows a user to set
   * criteria and generate a report. CONSOLIDATED_FEES is a page that will show the consolidated
   * fees for a merchant within an established timeframe. LIMITS_RATES_FEES is a page that displays
   * the processing limits and processing fees on a merchant account. TRANSACTION_REPORT is a page
   * that allows a user to view all transactions within an established timeframe. GB_FEES_REPORT is
   * a page that allows a merchant to review fees they will be charged, as is required by PSR
   * (Payment Systems Regulator).
   */
  function?: FunctionLinksFunction;
  /**
   * Indicates the email where app credentials should be sent. Used with EXCHANGE_APP_CREDENTIALS.
   */
  appEmail?: string;
  /**
   * Indicates the apps you want the credentials for. Credentials will be sent to the requested
   * app_email.
   */
  appIds?: string;
  /** The url of the page requesting the page. */
  referrerUrl?: string;
  /** The ip address of the page that will host the third-party page generated. */
  ipAddress?: string;
  /** The IP address of the device requesting the page. */
  ipSubnetMask?: string;
  displayConfiguration?: DisplayConfiguration;
  transactions?: Transactions;
  /** Indicates whether the link can be used once or multiple times */
  usageMode: UsageModeLinksUsageMode;
  /** The number of the times that the link can be used or paid. */
  usageLimit?: string;
  /** Merchant defined field to reference the transaction. */
  reference?: string;
  /** A descriptive name for the link. This will be visible to the customer on the payment page. */
  name: string;
  /**
   * A detailed description of your link that will be visible to the customer on the payment page.
   */
  description: string;
  /**
   * Indicates if you want to capture the customers shipping information on the hosted payment page.
   * If you enable this field you can also set an optional shipping fee in the shipping_amount.
   */
  shippable?: ShippableLinksShippable;
  /** Indicates the cost of shipping when the shippable field is set to YES. */
  shippingAmount?: string;
  /**
   * Indicates the date and time after which the link can no longer be used or paid. Please note
   * that the timezone is in UTC+0
   */
  expirationDate?: string;
  /** Indicates the delivery method of the link notification */
  messageType?: MessageTypeLinksMessageType;
  payer?: Payer13;
  order?: Order73;
  notifications?: Notifications19;
  installment?: Installment5;
  images?: Images;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const linksRequestProperties: s.Shape<LinksRequest> = {
  merchantId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  type: typeLinksTypeSchema,
  function: s.optional(s.lazy(() => functionLinksFunctionSchema)),
  appEmail: s.optional(s.string()),
  appIds: s.optional(s.string()),
  referrerUrl: s.optional(s.string()),
  ipAddress: s.optional(s.string()),
  ipSubnetMask: s.optional(s.string()),
  displayConfiguration: s.optional(s.lazy(() => displayConfigurationSchema)),
  transactions: s.optional(s.lazy(() => transactionsInternalSchema)),
  usageMode: usageModeLinksUsageModeSchema,
  usageLimit: s.optional(s.string()),
  reference: s.optional(s.string()),
  name: s.string(),
  description: s.string(),
  shippable: s.optional(s.lazy(() => shippableLinksShippableSchema)),
  shippingAmount: s.optional(s.string()),
  expirationDate: s.optional(s.string()),
  messageType: s.optional(s.lazy(() => messageTypeLinksMessageTypeSchema)),
  payer: s.optional(s.lazy(() => payer13InternalSchema)),
  order: s.optional(s.lazy(() => order73InternalSchema)),
  notifications: s.optional(s.lazy(() => notifications19InternalSchema)),
  installment: s.optional(s.lazy(() => installment5InternalSchema)),
  images: s.optional(s.lazy(() => imagesSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    accountName: "account_name",
    accountId: "account_id",
    appEmail: "app_email",
    appIds: "app_ids",
    referrerUrl: "referrer_url",
    ipAddress: "ip_address",
    ipSubnetMask: "ip_subnet_mask",
    displayConfiguration: "display_configuration",
    usageMode: "usage_mode",
    usageLimit: "usage_limit",
    shippingAmount: "shipping_amount",
    expirationDate: "expiration_date",
    messageType: "message_type",
  },
};

export const linksRequestInternalSchema: Schema<LinksRequest> = s.object<LinksRequest>(
  linksRequestProperties,
  { additionalProperties: s.json() },
);

export const linksRequestSchema: Schema<LinksRequest> = s.lazySchema(() =>
  s.object<LinksRequest>(
    {
      ...linksRequestProperties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      transactions: s.optional(s.lazy(() => transactionsSchema)),
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      name: s.string().check(s.minLength(1), s.maxLength(120)),
      description: s.string().check(s.minLength(1), s.maxLength(250)),
      payer: s.optional(s.lazy(() => payer13Schema)),
      order: s.optional(s.lazy(() => order73Schema)),
      notifications: s.optional(s.lazy(() => notifications19Schema)),
      installment: s.optional(s.lazy(() => installment5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
