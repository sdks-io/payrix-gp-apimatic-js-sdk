import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankTransfer10Schema, type BankTransfer10 } from "./bank-transfer10.js";
import { card52InternalSchema, card52Schema, type Card52 } from "./card52.js";
import {
  entryModeVerificationsPaymentMethodEntryModeSchema,
  type EntryModeVerificationsPaymentMethodEntryMode,
} from "./entry-mode-verifications-payment-method-entry-mode.js";
import {
  fingerprintPresenceIndicatorVerificationsPaymentMethodFingerprintPresenceIndicatorSchema,
  type FingerprintPresenceIndicatorVerificationsPaymentMethodFingerprintPresenceIndicator,
} from "./fingerprint-presence-indicator-verifications-payment-method-fingerprint-presence-indicator.js";

export type PaymentMethod52 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /** Result code from the payment method provider */
  result?: string;
  /** Result message from the payment method provider corresponding to the result code. */
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
  entryMode?: EntryModeVerificationsPaymentMethodEntryMode;
  /**
   * If enabled, this field indicates whether the payment method has been seen before or is new.
   * *`EXISTS` - Indicates that the payment method was seen on the platform before by this merchant.
   * *`NEW `- Indicates that the payment method was not seen on the platform before by this
   * merchant.
   */
  fingerprintPresenceIndicator?: FingerprintPresenceIndicatorVerificationsPaymentMethodFingerprintPresenceIndicator;
  /**
   * If enabled, this field contains the unique fingerprint signature for that payment method for
   * that merchant. If the payment method is seen again this same value is generated. For cards the
   * primary account number is checked only. The expiry date or the CVV is not used for this check.
   */
  fingerprint?: string;
  card?: Card52;
  bankTransfer?: BankTransfer10;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod52Properties: s.Shape<PaymentMethod52> = {
  id: s.optional(s.string()),
  result: s.optional(s.string()),
  message: s.optional(s.string()),
  entryMode: s.optional(s.lazy(() => entryModeVerificationsPaymentMethodEntryModeSchema)),
  fingerprintPresenceIndicator: s.optional(
    s.lazy(() => fingerprintPresenceIndicatorVerificationsPaymentMethodFingerprintPresenceIndicatorSchema),
  ),
  fingerprint: s.optional(s.string()),
  card: s.optional(s.lazy(() => card52InternalSchema)),
  bankTransfer: s.optional(s.lazy(() => bankTransfer10Schema)),
  _keysMap: {
    entryMode: "entry_mode",
    fingerprintPresenceIndicator: "fingerprint_presence_indicator",
    bankTransfer: "bank_transfer",
  },
};

export const paymentMethod52InternalSchema: Schema<PaymentMethod52> = s.object<PaymentMethod52>(
  paymentMethod52Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod52Schema: Schema<PaymentMethod52> = s.lazySchema(() =>
  s.object<PaymentMethod52>(
    {
      ...paymentMethod52Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      card: s.optional(s.lazy(() => card52Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
