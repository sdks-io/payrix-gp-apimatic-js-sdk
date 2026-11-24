import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apmResponseInternalSchema, apmResponseSchema, type ApmResponse } from "./apm-response.js";
import {
  authenticationResponseInternalSchema,
  authenticationResponseSchema,
  type AuthenticationResponse,
} from "./authentication-response.js";
import { bankTransferResponseSchema, type BankTransferResponse } from "./bank-transfer-response.js";
import { bnplSchema, type Bnpl } from "./bnpl.js";
import {
  cardResponseTransactionsInternalSchema,
  cardResponseTransactionsSchema,
  type CardResponseTransactions,
} from "./card-response-transactions.js";
import { digitalWalletInternalSchema, digitalWalletSchema, type DigitalWallet } from "./digital-wallet.js";
import {
  entryModeAuthenticationsPaymentMethodEntryModeSchema,
  type EntryModeAuthenticationsPaymentMethodEntryMode,
} from "./entry-mode-authentications-payment-method-entry-mode.js";
import {
  fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema,
  type FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator,
} from "./fingerprint-presence-indicator-authentications-payment-method-fingerprint-presence-indicator.js";

export type PaymentMethodResponseTransactions = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /**
   * If enabled, this field indicates whether the payment method has been seen before or is new.
   * * `EXISTS` - Indicates that the payment method was seen on the platform before by this
   *   merchant.
   * * `NEW` - Indicates that the payment method was not seen on the platform before by this
   *   merchant.
   */
  fingerprintPresenceIndicator?: FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator;
  /**
   * If enabled, this field contains the unique fingerprint signature for that payment method for
   * that merchant. If the payment method is seen again this same value is generated. For cards the
   * primary account number is checked only. The expiry date or the CVV is not used for this check.
   */
  fingerprint?: string;
  /**
   * The result code associated with the payment method used to process this transaction. It is
   * returned from another system used to process the payment method.
   */
  result?: string;
  /** The result message that better explains the result code. */
  message?: string;
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
  /** The QR Code string to use for this transaction. */
  qrCode?: string;
  /** Information outlining the degree of authentication executed as part of a transaction. */
  authentication?: AuthenticationResponse;
  digitalWallet?: DigitalWallet;
  /** Data associated with the response of an APM transaction. */
  apm?: ApmResponse;
  card?: CardResponseTransactions;
  bankTransfer?: BankTransferResponse;
  bnpl?: Bnpl;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodResponseTransactionsProperties: s.Shape<PaymentMethodResponseTransactions> = {
  id: s.optional(s.string()),
  fingerprintPresenceIndicator: s.optional(
    s.lazy(() => fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema),
  ),
  fingerprint: s.optional(s.string()),
  result: s.optional(s.string()),
  message: s.optional(s.string()),
  entryMode: s.optional(s.lazy(() => entryModeAuthenticationsPaymentMethodEntryModeSchema)),
  narrative: s.optional(s.string()),
  qrCode: s.optional(s.string()),
  authentication: s.optional(s.lazy(() => authenticationResponseInternalSchema)),
  digitalWallet: s.optional(s.lazy(() => digitalWalletInternalSchema)),
  apm: s.optional(s.lazy(() => apmResponseInternalSchema)),
  card: s.optional(s.lazy(() => cardResponseTransactionsInternalSchema)),
  bankTransfer: s.optional(s.lazy(() => bankTransferResponseSchema)),
  bnpl: s.optional(s.lazy(() => bnplSchema)),
  _keysMap: {
    fingerprintPresenceIndicator: "fingerprint_presence_indicator",
    entryMode: "entry_mode",
    qrCode: "qr_code",
    digitalWallet: "digital_wallet",
    bankTransfer: "bank_transfer",
  },
};

export const paymentMethodResponseTransactionsInternalSchema: Schema<PaymentMethodResponseTransactions> =
  s.object<PaymentMethodResponseTransactions>(paymentMethodResponseTransactionsProperties, {
    additionalProperties: s.json(),
  });

export const paymentMethodResponseTransactionsSchema: Schema<PaymentMethodResponseTransactions> =
  s.lazySchema(() =>
    s.object<PaymentMethodResponseTransactions>(
      {
        ...paymentMethodResponseTransactionsProperties,
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        fingerprint: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        narrative: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        qrCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        authentication: s.optional(s.lazy(() => authenticationResponseSchema)),
        digitalWallet: s.optional(s.lazy(() => digitalWalletSchema)),
        apm: s.optional(s.lazy(() => apmResponseSchema)),
        card: s.optional(s.lazy(() => cardResponseTransactionsSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
