import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  additionalMerchantDetailsInternalSchema,
  additionalMerchantDetailsSchema,
  type AdditionalMerchantDetails,
} from "./additional-merchant-details.js";
import { airlineInternalSchema, airlineSchema, type Airline } from "./airline.js";
import {
  authorizationModeTransactionsAuthorizationModeSchema,
  type AuthorizationModeTransactionsAuthorizationMode,
} from "./authorization-mode-transactions-authorization-mode.js";
import {
  CaptureModeTransactionsCaptureMode,
  captureModeTransactionsCaptureModeSchema,
} from "./capture-mode-transactions-capture-mode.js";
import {
  channelAuthenticationsChannelSchema,
  type ChannelAuthenticationsChannel,
} from "./channel-authentications-channel.js";
import {
  CheckForDuplicateTransactionsCheckForDuplicate,
  checkForDuplicateTransactionsCheckForDuplicateSchema,
} from "./check-for-duplicate-transactions-check-for-duplicate.js";
import {
  currencyAuthenticationsCurrencySchema,
  type CurrencyAuthenticationsCurrency,
} from "./currency-authentications-currency.js";
import {
  currencyConversionInternalSchema,
  currencyConversionSchema,
  type CurrencyConversion,
} from "./currency-conversion.js";
import { device4InternalSchema, device4Schema, type Device4 } from "./device4.js";
import { healthcareInternalSchema, healthcareSchema, type Healthcare } from "./healthcare.js";
import {
  initiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiatorSchema,
  type InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator,
} from "./initiator-links-order-payment-method-configuration-stored-credential-initiator.js";
import { installmentInternalSchema, installmentSchema, type Installment } from "./installment.js";
import { lodging2InternalSchema, lodging2Schema, type Lodging2 } from "./lodging2.js";
import {
  MerchantCategoryTransactionsMerchantCategory,
  merchantCategoryTransactionsMerchantCategorySchema,
} from "./merchant-category-transactions-merchant-category.js";
import { notifications12Schema, type Notifications12 } from "./notifications12.js";
import { order42InternalSchema, order42Schema, type Order42 } from "./order42.js";
import { payer6InternalSchema, payer6Schema, type Payer6 } from "./payer6.js";
import {
  paymentFacilitatorInternalSchema,
  paymentFacilitatorSchema,
  type PaymentFacilitator,
} from "./payment-facilitator.js";
import {
  paymentMethodRequestTransactionsInternalSchema,
  paymentMethodRequestTransactionsSchema,
  type PaymentMethodRequestTransactions,
} from "./payment-method-request-transactions.js";
import {
  riskAssessmentInternalSchema,
  riskAssessmentSchema,
  type RiskAssessment,
} from "./risk-assessment.js";
import { storedCredential1Schema, type StoredCredential1 } from "./stored-credential1.js";
import {
  surchargeTypeTransactionsSurchargeTypeSchema,
  type SurchargeTypeTransactionsSurchargeType,
} from "./surcharge-type-transactions-surcharge-type.js";
import {
  TransactionTypeAuthenticationsTransactionType,
  transactionTypeAuthenticationsTransactionTypeSchema,
} from "./transaction-type-authentications-transaction-type.js";

export type CreateRequestTransactions = {
  /** A meaningful label that better identifies the account. */
  accountName: string;
  /**
   * Describes whether the transaction is a SALE, that moves funds from Payer to Merchant, or a
   * REFUND where funds move from Merchant to Payer.
   * * `SALE` - indicates the movement, or the attempt to move, funds from payer to a merchant.
   * * `REFUND` - indicates the movement, or the attempt to move, funds from merchant to the payer.
   *
   * @default TransactionTypeAuthenticationsTransactionType.Sale
   */
  type?: TransactionTypeAuthenticationsTransactionType;
  /**
   * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer
   * Not Present (CNP) scenario.
   * * `CP` - A Customer Present transaction is when the payer and the merchant are in direct face
   *   to face contact when exchanging payment method information to fulfill a transaction. e.g. in
   *   a store and paying at the counter that is attended by a clerk.
   * * `CNP` - A Customer NOT Present transaction is when the payer and the merchant are not
   *   together when exchanging payment method information to fulfill a transaction. e.g. a
   *   transaction executed from a merchant's website or over the phone
   */
  channel: ChannelAuthenticationsChannel;
  /**
   * This is the country the merchant is domiciled in. For example, if the merchant is based in
   * Canada it must be set to CA.if the merchant is based in England it must be set to GB.if the
   * merchant is based in USA it must be set to US.The country in ISO-3166-1(alpha-2 code) format.
   */
  country: string;
  /**
   * Indicates whether the transaction is to be captured automatically, later or later using more
   * than 1 partial capture.
   * * `AUTO` - If a transaction is authorized, funds will exchange between the payer and merchant
   *   automatically and as soon as possible.
   * * `LATER` - If a transaction is authorized, funds will not exchange between the payer and
   *   merchant automatically and will require a subsequent separate action to capture that
   *   transaction and start the funding process. Only one successful capture is permitted.
   * * `MULTIPLE` - If a transaction is authorized, funds will not exchange between the payer and
   *   merchant automatically. One or more subsequent separate capture actions are required to
   *   capture that transaction in parts and start the funding process for the part captured. One or
   *   many successful capture are permitted once the total amount captured is within a range of the
   *   original authorized amount.
   * * 'LATER_FINAL' - If a transaction is authorized, funds will not exchange between the payer and
   *   merchant automatically and will require a subsequent separate action to capture that
   *   transaction and start the funding process. In this case, the separate capture amount must be
   *   the same as the initial auth.
   *
   * @default CaptureModeTransactionsCaptureMode.Auto
   */
  captureMode?: CaptureModeTransactionsCaptureMode;
  /**
   * Indicates the total or expected total of captures that will executed against a transaction that
   * can be captured multiple times.
   */
  totalCaptureCount?: number;
  /**
   * Indicates if the transaction can be authorized using another non-standard model where the
   * amount is not fully authorized at the time the transaction is created.
   * * `PARTIAL` - Indicates if the transaction can be or was authorized for an amount less than the
   *   requested amount. This is available for CP channel. The outstanding balance, not yet
   *   authorized, can be processed again using a different card.
   * * `DEFERRED` - Indicates if the transaction can be created offline and authorized later when
   *   the systems are back online
   */
  authorizationMode?: AuthorizationModeTransactionsAuthorizationMode;
  /**
   * This field should be sent on all Deferred Authorizations and reflect the time the transaction
   * was created in the POS application.
   */
  deferredTimeCreated?: Date;
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency. and with no decimal point.
   */
  amount: string;
  /** The currency of the amount in ISO-4217(alpha-3). */
  currency: CurrencyAuthenticationsCurrency;
  /** The amount of the gratuity for a transaction. */
  gratuityAmount?: string;
  /** The amount of the transaction that relates to cashback. */
  cashbackAmount?: string;
  /**
   * The amount that reflects the additional charge the merchant applied to the transaction for
   * using a specific payment method.
   */
  surchargeAmount?: string;
  /** This indicates whether the surcharge is a DEBIT or CREDIT to the merchant */
  surchargeType?: SurchargeTypeTransactionsSurchargeType;
  /**
   * The amount that reflects the charge the merchant applied to the transaction for availing of a
   * more convenient purchase.
   */
  convenienceAmount?: string;
  /** Merchant defined field to reference the transaction. */
  reference: string;
  /** Merchant defined description for the transaction. */
  description?: string;
  /**
   * Indicates the language the transaction was executed in. In the format ISO-639-1 (alpha-2) or
   * ISO-639-1 (alpha-2)_ISO-3166(alpha-2)
   */
  language?: string;
  /**
   * This flag is set by the merchant to indicate if duplicate checking on this transaction can be
   * skipped
   *
   * @default CheckForDuplicateTransactionsCheckForDuplicate.No
   */
  checkForDuplicate?: CheckForDuplicateTransactionsCheckForDuplicate;
  /**
   * Indicates the source IP Address of the system used to process the transaction with Global
   * Payments.
   */
  ipAddress?: string;
  /** A merchant defined reference for the location that created the transaction. */
  siteReference?: string;
  /**
   * The merchant's user reference for the transaction. This represents the person who processed the
   * transaction on the merchant's behalf like a clerk or cashier reference.
   */
  userReference?: string;
  /**
   * The merchant's payer, or customer, reference for the transaction. This represents the person or
   * company who is paying for goods and services provided by the merchant.
   */
  payerReference?: string;
  /**
   * Indicates what industry the merchant belongs to.
   *
   * @default MerchantCategoryTransactionsMerchantCategory.Other
   */
  merchantCategory?: MerchantCategoryTransactionsMerchantCategory;
  /** A four-digit number used to classify the merchant into an industry or market segment. */
  merchantCategoryCode?: string;
  /**
   * This is the merchants unique identifier that enables them to accept Benefit cards. In the US,
   * this is the Food and Consumer Service (FCS) ID and it is required for EBT Food Stamp and
   * Electronic Voucher transactions.
   */
  merchantBenefitsReference?: string;
  order?: Order42;
  currencyConversion?: CurrencyConversion;
  /**
   * Indicates whether the Merchant or the Payer initiated the creation of a transaction.
   * * `PAYER` - The transaction was initiated by the customer who is paying the merchant.
   * * `MERCHANT` - The transaction was initiated by the merchant, who is getting paid by the payer.
   */
  initiator?: InitiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiator;
  storedCredential?: StoredCredential1;
  notifications?: Notifications12;
  payer?: Payer6;
  paymentMethod: PaymentMethodRequestTransactions;
  device?: Device4;
  lodging?: Lodging2;
  installment?: Installment;
  riskAssessment?: RiskAssessment[];
  airline?: Airline;
  healthcare?: Healthcare;
  paymentFacilitator?: PaymentFacilitator;
  additionalMerchantDetails?: AdditionalMerchantDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequestTransactionsProperties: s.Shape<CreateRequestTransactions> = {
  accountName: s.string(),
  type: s.defaulted(
    transactionTypeAuthenticationsTransactionTypeSchema,
    TransactionTypeAuthenticationsTransactionType.Sale,
  ),
  channel: channelAuthenticationsChannelSchema,
  country: s.string(),
  captureMode: s.defaulted(captureModeTransactionsCaptureModeSchema, CaptureModeTransactionsCaptureMode.Auto),
  totalCaptureCount: s.optional(s.float64()),
  authorizationMode: s.optional(s.lazy(() => authorizationModeTransactionsAuthorizationModeSchema)),
  deferredTimeCreated: s.optional(s.dateTime()),
  amount: s.string(),
  currency: currencyAuthenticationsCurrencySchema,
  gratuityAmount: s.optional(s.string()),
  cashbackAmount: s.optional(s.string()),
  surchargeAmount: s.optional(s.string()),
  surchargeType: s.optional(s.lazy(() => surchargeTypeTransactionsSurchargeTypeSchema)),
  convenienceAmount: s.optional(s.string()),
  reference: s.string(),
  description: s.optional(s.string()),
  language: s.optional(s.string()),
  checkForDuplicate: s.defaulted(
    checkForDuplicateTransactionsCheckForDuplicateSchema,
    CheckForDuplicateTransactionsCheckForDuplicate.No,
  ),
  ipAddress: s.optional(s.string()),
  siteReference: s.optional(s.string()),
  userReference: s.optional(s.string()),
  payerReference: s.optional(s.string()),
  merchantCategory: s.defaulted(
    merchantCategoryTransactionsMerchantCategorySchema,
    MerchantCategoryTransactionsMerchantCategory.Other,
  ),
  merchantCategoryCode: s.optional(s.string()),
  merchantBenefitsReference: s.optional(s.string()),
  order: s.optional(s.lazy(() => order42InternalSchema)),
  currencyConversion: s.optional(s.lazy(() => currencyConversionInternalSchema)),
  initiator: s.optional(
    s.lazy(() => initiatorLinksOrderPaymentMethodConfigurationStoredCredentialInitiatorSchema),
  ),
  storedCredential: s.optional(s.lazy(() => storedCredential1Schema)),
  notifications: s.optional(s.lazy(() => notifications12Schema)),
  payer: s.optional(s.lazy(() => payer6InternalSchema)),
  paymentMethod: paymentMethodRequestTransactionsInternalSchema,
  device: s.optional(s.lazy(() => device4InternalSchema)),
  lodging: s.optional(s.lazy(() => lodging2InternalSchema)),
  installment: s.optional(s.lazy(() => installmentInternalSchema)),
  riskAssessment: s.optional(s.array(s.lazy(() => riskAssessmentInternalSchema))),
  airline: s.optional(s.lazy(() => airlineInternalSchema)),
  healthcare: s.optional(s.lazy(() => healthcareInternalSchema)),
  paymentFacilitator: s.optional(s.lazy(() => paymentFacilitatorInternalSchema)),
  additionalMerchantDetails: s.optional(s.lazy(() => additionalMerchantDetailsInternalSchema)),
  _keysMap: {
    accountName: "account_name",
    captureMode: "capture_mode",
    totalCaptureCount: "total_capture_count",
    authorizationMode: "authorization_mode",
    deferredTimeCreated: "deferred_time_created",
    gratuityAmount: "gratuity_amount",
    cashbackAmount: "cashback_amount",
    surchargeAmount: "surcharge_amount",
    surchargeType: "surcharge_type",
    convenienceAmount: "convenience_amount",
    checkForDuplicate: "check_for_duplicate",
    ipAddress: "ip_address",
    siteReference: "site_reference",
    userReference: "user_reference",
    payerReference: "payer_reference",
    merchantCategory: "merchant_category",
    merchantCategoryCode: "merchant_category_code",
    merchantBenefitsReference: "merchant_benefits_reference",
    currencyConversion: "currency_conversion",
    storedCredential: "stored_credential",
    paymentMethod: "payment_method",
    riskAssessment: "risk_assessment",
    paymentFacilitator: "payment_facilitator",
    additionalMerchantDetails: "additional_merchant_details",
  },
};

export const createRequestTransactionsInternalSchema: Schema<CreateRequestTransactions> =
  s.object<CreateRequestTransactions>(createRequestTransactionsProperties, {
    additionalProperties: s.json(),
  });

export const createRequestTransactionsSchema: Schema<CreateRequestTransactions> = s.lazySchema(() =>
  s.object<CreateRequestTransactions>(
    {
      ...createRequestTransactionsProperties,
      accountName: s.string().check(s.minLength(1), s.maxLength(50)),
      country: s.string().check(s.minLength(2), s.maxLength(2)),
      amount: s.string().check(s.minLength(1), s.maxLength(50)),
      gratuityAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      cashbackAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      surchargeAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      convenienceAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.string().check(s.minLength(8), s.maxLength(50)),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      language: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      ipAddress: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      siteReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      userReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      payerReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantCategoryCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      order: s.optional(s.lazy(() => order42Schema)),
      currencyConversion: s.optional(s.lazy(() => currencyConversionSchema)),
      payer: s.optional(s.lazy(() => payer6Schema)),
      paymentMethod: paymentMethodRequestTransactionsSchema,
      device: s.optional(s.lazy(() => device4Schema)),
      lodging: s.optional(s.lazy(() => lodging2Schema)),
      installment: s.optional(s.lazy(() => installmentSchema)),
      riskAssessment: s.optional(s.array(s.lazy(() => riskAssessmentSchema))),
      airline: s.optional(s.lazy(() => airlineSchema)),
      healthcare: s.optional(s.lazy(() => healthcareSchema)),
      paymentFacilitator: s.optional(s.lazy(() => paymentFacilitatorSchema)),
      additionalMerchantDetails: s.optional(s.lazy(() => additionalMerchantDetailsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
