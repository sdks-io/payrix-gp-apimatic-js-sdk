import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  authentication9InternalSchema,
  authentication9Schema,
  type Authentication9,
} from "./authentication9.js";
import { bankTransfer9Schema, type BankTransfer9 } from "./bank-transfer9.js";
import { card51InternalSchema, card51Schema, type Card51 } from "./card51.js";
import { encryption1InternalSchema, encryption1Schema, type Encryption1 } from "./encryption1.js";
import {
  entryModeVerificationsPaymentMethodEntryModeSchema,
  type EntryModeVerificationsPaymentMethodEntryMode,
} from "./entry-mode-verifications-payment-method-entry-mode.js";
import {
  fingerprintModeVerificationsPaymentMethodFingerprintModeSchema,
  type FingerprintModeVerificationsPaymentMethodFingerprintMode,
} from "./fingerprint-mode-verifications-payment-method-fingerprint-mode.js";
import {
  storageModeTransactionsPaymentMethodStorageModeSchema,
  type StorageModeTransactionsPaymentMethodStorageMode,
} from "./storage-mode-transactions-payment-method-storage-mode.js";

export type PaymentMethod51 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /** Specify the first name of the owner of the payment method. */
  firstName?: string;
  /** Specify the surname of the owner of the payment method. */
  lastName?: string;
  /** The name of the payment method */
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
  entryMode?: EntryModeVerificationsPaymentMethodEntryMode;
  /**
   * Indicates whether to execute the fingerprint signature functionality. *`ALWAYS` - Always check
   * and create the fingerprint value regardless of the result of the card authorization.
   * *`ON_SUCCESS` - Always check and create the fingerprint value when the card authorization is
   * successful.
   */
  fingerprintMode?: FingerprintModeVerificationsPaymentMethodFingerprintMode;
  /**
   * Indicates whether to store the card as part of a transaction.
   * * `ALWAYS` - The card information is always stored irrespective of whether the payment method
   *   authorization was successful or not.
   * * `ON_SUCCESS` - The card information is only stored if the payment method authorization was
   *   successful.
   */
  storageMode?: StorageModeTransactionsPaymentMethodStorageMode;
  encryption?: Encryption1;
  authentication?: Authentication9;
  card?: Card51;
  bankTransfer?: BankTransfer9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod51Properties: s.Shape<PaymentMethod51> = {
  id: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  name: s.optional(s.string()),
  entryMode: s.optional(s.lazy(() => entryModeVerificationsPaymentMethodEntryModeSchema)),
  fingerprintMode: s.optional(s.lazy(() => fingerprintModeVerificationsPaymentMethodFingerprintModeSchema)),
  storageMode: s.optional(s.lazy(() => storageModeTransactionsPaymentMethodStorageModeSchema)),
  encryption: s.optional(s.lazy(() => encryption1InternalSchema)),
  authentication: s.optional(s.lazy(() => authentication9InternalSchema)),
  card: s.optional(s.lazy(() => card51InternalSchema)),
  bankTransfer: s.optional(s.lazy(() => bankTransfer9Schema)),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    entryMode: "entry_mode",
    fingerprintMode: "fingerprint_mode",
    storageMode: "storage_mode",
    bankTransfer: "bank_transfer",
  },
};

export const paymentMethod51InternalSchema: Schema<PaymentMethod51> = s.object<PaymentMethod51>(
  paymentMethod51Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod51Schema: Schema<PaymentMethod51> = s.lazySchema(() =>
  s.object<PaymentMethod51>(
    {
      ...paymentMethod51Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      firstName: s.optional(s.string().check(s.maxLength(50))),
      lastName: s.optional(s.string().check(s.maxLength(50))),
      name: s.optional(s.string().check(s.maxLength(100))),
      encryption: s.optional(s.lazy(() => encryption1Schema)),
      authentication: s.optional(s.lazy(() => authentication9Schema)),
      card: s.optional(s.lazy(() => card51Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
