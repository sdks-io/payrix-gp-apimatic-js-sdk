import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card2InternalSchema, card2Schema, type Card2 } from "./card2.js";
import {
  entryModeAuthenticationsPaymentMethodEntryModeSchema,
  type EntryModeAuthenticationsPaymentMethodEntryMode,
} from "./entry-mode-authentications-payment-method-entry-mode.js";
import {
  fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema,
  type FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator,
} from "./fingerprint-presence-indicator-authentications-payment-method-fingerprint-presence-indicator.js";
import { threeDs7InternalSchema, threeDs7Schema, type ThreeDs7 } from "./three-ds7.js";

export type PaymentMethod9 = {
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
  entryMode?: EntryModeAuthenticationsPaymentMethodEntryMode;
  /**
   * If enabled, this field contains the unique fingerprint signature for that payment method for
   * that merchant. If the payment method is seen again this same value is generated. For cards the
   * primary account number is checked only. The expiry date or the CVV is not used for this check.
   */
  fingerprint?: string;
  /**
   * If enabled, this field indicates whether the payment method has been seen before or is new.
   * * `EXISTS` - Indicates that the payment method was seen on the platform before by this
   *   merchant.
   * * `NEW` - Indicates that the payment method was not seen on the platform before by this
   *   merchant.
   */
  fingerprintPresenceIndicator?: FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator;
  /**
   * The name of the Payment Method. Note for European merchants: This field is mandatory for SCA.
   */
  name?: string;
  card?: Card2;
  threeDs?: ThreeDs7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod9Properties: s.Shape<PaymentMethod9> = {
  result: s.optional(s.string()),
  message: s.optional(s.string()),
  entryMode: s.optional(s.lazy(() => entryModeAuthenticationsPaymentMethodEntryModeSchema)),
  fingerprint: s.optional(s.string()),
  fingerprintPresenceIndicator: s.optional(
    s.lazy(() => fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema),
  ),
  name: s.optional(s.string()),
  card: s.optional(s.lazy(() => card2InternalSchema)),
  threeDs: s.optional(s.lazy(() => threeDs7InternalSchema)),
  _keysMap: {
    entryMode: "entry_mode",
    fingerprintPresenceIndicator: "fingerprint_presence_indicator",
    threeDs: "three_ds",
  },
};

export const paymentMethod9InternalSchema: Schema<PaymentMethod9> = s.object<PaymentMethod9>(
  paymentMethod9Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod9Schema: Schema<PaymentMethod9> = s.lazySchema(() =>
  s.object<PaymentMethod9>(
    {
      ...paymentMethod9Properties,
      fingerprint: s.optional(s.string().check(s.maxLength(256))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      card: s.optional(s.lazy(() => card2Schema)),
      threeDs: s.optional(s.lazy(() => threeDs7Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
