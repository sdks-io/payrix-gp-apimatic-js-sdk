import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apmRequestInternalSchema, apmRequestSchema, type ApmRequest } from "./apm-request.js";
import { authenticationInternalSchema, authenticationSchema, type Authentication } from "./authentication.js";
import {
  bankTransferRequestInternalSchema,
  bankTransferRequestSchema,
  type BankTransferRequest,
} from "./bank-transfer-request.js";
import { bnplSchema, type Bnpl } from "./bnpl.js";
import {
  cardRequestTransactionsInternalSchema,
  cardRequestTransactionsSchema,
  type CardRequestTransactions,
} from "./card-request-transactions.js";
import { consent4Schema, type Consent4 } from "./consent4.js";
import {
  digitalWalletRequestInternalSchema,
  digitalWalletRequestSchema,
  type DigitalWalletRequest,
} from "./digital-wallet-request.js";
import { encryption1InternalSchema, encryption1Schema, type Encryption1 } from "./encryption1.js";
import {
  entryModeAuthenticationsPaymentMethodEntryModeSchema,
  type EntryModeAuthenticationsPaymentMethodEntryMode,
} from "./entry-mode-authentications-payment-method-entry-mode.js";
import {
  fingerprintModePaymentMethodsFingerprintModeSchema,
  type FingerprintModePaymentMethodsFingerprintMode,
} from "./fingerprint-mode-payment-methods-fingerprint-mode.js";
import {
  payerRelationshipModeTransactionsPaymentMethodPayerRelationshipModeSchema,
  type PayerRelationshipModeTransactionsPaymentMethodPayerRelationshipMode,
} from "./payer-relationship-mode-transactions-payment-method-payer-relationship-mode.js";
import {
  programTypeTransactionsPaymentMethodProgramTypeSchema,
  type ProgramTypeTransactionsPaymentMethodProgramType,
} from "./program-type-transactions-payment-method-program-type.js";
import {
  redirectHttpMethodTransactionsPaymentMethodRedirectHttpMethodSchema,
  type RedirectHttpMethodTransactionsPaymentMethodRedirectHttpMethod,
} from "./redirect-http-method-transactions-payment-method-redirect-http-method.js";
import {
  storageModeTransactionsPaymentMethodStorageModeSchema,
  type StorageModeTransactionsPaymentMethodStorageMode,
} from "./storage-mode-transactions-payment-method-storage-mode.js";
import {
  usageModeTransactionsPaymentMethodUsageModeSchema,
  type UsageModeTransactionsPaymentMethodUsageMode,
} from "./usage-mode-transactions-payment-method-usage-mode.js";

export type PaymentMethodRequestTransactions = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /** The first name of the owner of the payment method */
  firstName?: string;
  /** The last name of the owner of the payment method */
  lastName?: string;
  /** The name of the owner of the payment method */
  name?: string;
  /**
   * Indicates how the payment method information was obtained by the Merchant for this transaction.
   * * `MOTO` - A CNP channel entry mode where the payment method information was obtained over the
   *   phone or via postal mail.
   * * `ECOM` - A CNP channel entry mode where the payment method was obtained via a browser.
   * * `IN_APP` - A CNP channel entry mode where the payment method was obtained via an application
   *   and applies to digital wallets only.
   * * `CHIP` - A CP channel entry mode where the payment method information was obtained from a
   *   chip. E.g. card is inserted into a device to read the chip.
   * * `SWIPE` - A CP channel entry mode where the payment method information was obtained from
   *   swiping a magnetic strip. E.g. card's magnetic strip is swiped through a device to read the
   *   card information.
   * * `MANUAL` - A CP channel entry mode where the payment method information was obtained by
   *   manually keying the payment method information into the device.
   * * `CONTACTLESS_CHIP` - A CP channel entry mode where the payment method information was
   *   obtained by bringing the payment method to close proximity of a device. E.g. tap a card on or
   *   near a device to exchange card information.
   * * `CONTACTLESS_SWIPE` - A CP channel entry mode where the payment method information was
   *   obtained by bringing the payment method to close proximity of a device and also swiping the
   *   card. E.g. tap a card on or near a device and swipe it through device to exchange card
   *   information
   * * `PHONE` - A CNP channel entry mode where the payment method was obtained over the phone.
   * * `MAIL` - A CNP channel entry mode where the payment method was obtained via postal mail.
   * * `PRESENT`- The entry mode cannot be determined but it is a Customer Present transaction.
   * * `UNKNOWN` - The entry mode for this transaction cannot be determined.
   */
  entryMode?: EntryModeAuthenticationsPaymentMethodEntryMode;
  /**
   * Contains the value a merchant wishes to appear on the payer's payment method statement for this
   * transaction.
   */
  narrative?: string;
  /**
   * Indicates whether to store the card as part of a transaction.
   * * `ALWAYS` - The card information is always stored irrespective of whether the payment method
   *   authorization was successful or not.
   * * `ON_SUCCESS` - The card information is only stored if the payment method authorization was
   *   successful.
   */
  storageMode?: StorageModeTransactionsPaymentMethodStorageMode;
  /**
   * Indicates whether to execute the fingerprint signature functionality.
   * * `ALWAYS` - Always check and create the fingerprint value regardless of the result of the card
   *   authorization.
   * * `ON_SUCCESS` - Always check and create the fingerprint value when the card authorization is
   *   successful.
   */
  fingerprintMode?: FingerprintModePaymentMethodsFingerprintMode;
  /**
   * Used to Specify whether to store the Tokenized card against the payer reference provided by the
   * integrator
   */
  payerRelationshipMode?: PayerRelationshipModeTransactionsPaymentMethodPayerRelationshipMode;
  /**
   * Indicates the behaviour of the payment method token.
   * * `SINGLE` - When creating the payment method token, this indicates it is temporary and will be
   *   removed once a transaction is executed or after a short period of time
   * * `MULTIPLE` - When creating the payment method token, this indicates it is permanent and can
   *   be used to create many transactions.
   * * `USE_CARD_NUMBER` - When using the payment method token to transaction process, this
   *   indicates to use the card number also known as the PAN or FPAN.
   * * `USE_NETWORK_TOKEN` - When using the payment method token to transaction process, this
   *   indicates to use the network token instead of the card number.
   */
  usageMode?: UsageModeTransactionsPaymentMethodUsageMode;
  /** This Indicates the Program type for the Bill payment */
  programType?: ProgramTypeTransactionsPaymentMethodProgramType;
  encryption?: Encryption1;
  authentication?: Authentication;
  card?: CardRequestTransactions;
  consent?: Consent4;
  digitalWallet?: DigitalWalletRequest;
  apm?: ApmRequest;
  bankTransfer?: BankTransferRequest;
  bnpl?: Bnpl;
  /** The HTTP method to use when redirecting to the redirect_url */
  redirectHttpMethod?: RedirectHttpMethodTransactionsPaymentMethodRedirectHttpMethod;
  /** The data to include in the redirection to the redirect_url */
  redirectData?: string;
  /** The QR Code string to use for this transaction. */
  qrCode?: string;
  /** The URL to the QR Code image that can be rendered to the user. */
  qrCodeImageUrl?: string;
  /** The time the QR Code expires and cannot be used. */
  qrCodeTimeExpiredAt?: Date;
  /** URL to redirect the payer from the merchant's system to the payment method system. */
  redirectUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodRequestTransactionsProperties: s.Shape<PaymentMethodRequestTransactions> = {
  id: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  name: s.optional(s.string()),
  entryMode: s.optional(s.lazy(() => entryModeAuthenticationsPaymentMethodEntryModeSchema)),
  narrative: s.optional(s.string()),
  storageMode: s.optional(s.lazy(() => storageModeTransactionsPaymentMethodStorageModeSchema)),
  fingerprintMode: s.optional(s.lazy(() => fingerprintModePaymentMethodsFingerprintModeSchema)),
  payerRelationshipMode: s.optional(
    s.lazy(() => payerRelationshipModeTransactionsPaymentMethodPayerRelationshipModeSchema),
  ),
  usageMode: s.optional(s.lazy(() => usageModeTransactionsPaymentMethodUsageModeSchema)),
  programType: s.optional(s.lazy(() => programTypeTransactionsPaymentMethodProgramTypeSchema)),
  encryption: s.optional(s.lazy(() => encryption1InternalSchema)),
  authentication: s.optional(s.lazy(() => authenticationInternalSchema)),
  card: s.optional(s.lazy(() => cardRequestTransactionsInternalSchema)),
  consent: s.optional(s.lazy(() => consent4Schema)),
  digitalWallet: s.optional(s.lazy(() => digitalWalletRequestInternalSchema)),
  apm: s.optional(s.lazy(() => apmRequestInternalSchema)),
  bankTransfer: s.optional(s.lazy(() => bankTransferRequestInternalSchema)),
  bnpl: s.optional(s.lazy(() => bnplSchema)),
  redirectHttpMethod: s.optional(
    s.lazy(() => redirectHttpMethodTransactionsPaymentMethodRedirectHttpMethodSchema),
  ),
  redirectData: s.optional(s.string()),
  qrCode: s.optional(s.string()),
  qrCodeImageUrl: s.optional(s.string()),
  qrCodeTimeExpiredAt: s.optional(s.dateTime()),
  redirectUrl: s.optional(s.string()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    entryMode: "entry_mode",
    storageMode: "storage_mode",
    fingerprintMode: "fingerprint_mode",
    payerRelationshipMode: "payer_relationship_mode",
    usageMode: "usage_mode",
    programType: "program_type",
    digitalWallet: "digital_wallet",
    bankTransfer: "bank_transfer",
    redirectHttpMethod: "redirect_http_method",
    redirectData: "redirect_data",
    qrCode: "qr_code",
    qrCodeImageUrl: "qr_code_image_url",
    qrCodeTimeExpiredAt: "qr_code_time_expired_at",
    redirectUrl: "redirect_url",
  },
};

export const paymentMethodRequestTransactionsInternalSchema: Schema<PaymentMethodRequestTransactions> =
  s.object<PaymentMethodRequestTransactions>(paymentMethodRequestTransactionsProperties, {
    additionalProperties: s.json(),
  });

export const paymentMethodRequestTransactionsSchema: Schema<PaymentMethodRequestTransactions> = s.lazySchema(
  () =>
    s.object<PaymentMethodRequestTransactions>(
      {
        ...paymentMethodRequestTransactionsProperties,
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        narrative: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        encryption: s.optional(s.lazy(() => encryption1Schema)),
        authentication: s.optional(s.lazy(() => authenticationSchema)),
        card: s.optional(s.lazy(() => cardRequestTransactionsSchema)),
        digitalWallet: s.optional(s.lazy(() => digitalWalletRequestSchema)),
        apm: s.optional(s.lazy(() => apmRequestSchema)),
        bankTransfer: s.optional(s.lazy(() => bankTransferRequestSchema)),
        redirectData: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        qrCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        redirectUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      },
      { additionalProperties: s.json() },
    ),
);
