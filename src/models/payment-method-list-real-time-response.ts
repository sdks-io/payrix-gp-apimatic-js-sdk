import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  authentication6InternalSchema,
  authentication6Schema,
  type Authentication6,
} from "./authentication6.js";
import { bnplSchema, type Bnpl } from "./bnpl.js";
import {
  cardListRealTimeResponseInternalSchema,
  cardListRealTimeResponseSchema,
  type CardListRealTimeResponse,
} from "./card-list-real-time-response.js";
import {
  entryModeAuthenticationsPaymentMethodEntryModeSchema,
  type EntryModeAuthenticationsPaymentMethodEntryMode,
} from "./entry-mode-authentications-payment-method-entry-mode.js";
import {
  fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema,
  type FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator,
} from "./fingerprint-presence-indicator-authentications-payment-method-fingerprint-presence-indicator.js";

export type PaymentMethodListRealTimeResponse = {
  /** The name of the owner of the payment method */
  name?: string;
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
  /** Data relating to the card payment method returned in a list response. */
  card?: CardListRealTimeResponse;
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
  authentication?: Authentication6;
  bnpl?: Bnpl;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodListRealTimeResponseProperties: s.Shape<PaymentMethodListRealTimeResponse> = {
  name: s.optional(s.string()),
  result: s.optional(s.string()),
  message: s.optional(s.string()),
  entryMode: s.optional(s.lazy(() => entryModeAuthenticationsPaymentMethodEntryModeSchema)),
  card: s.optional(s.lazy(() => cardListRealTimeResponseInternalSchema)),
  fingerprint: s.optional(s.string()),
  fingerprintPresenceIndicator: s.optional(
    s.lazy(() => fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema),
  ),
  authentication: s.optional(s.lazy(() => authentication6InternalSchema)),
  bnpl: s.optional(s.lazy(() => bnplSchema)),
  _keysMap: {
    entryMode: "entry_mode",
    fingerprintPresenceIndicator: "fingerprint_presence_indicator",
  },
};

export const paymentMethodListRealTimeResponseInternalSchema: Schema<PaymentMethodListRealTimeResponse> =
  s.object<PaymentMethodListRealTimeResponse>(paymentMethodListRealTimeResponseProperties, {
    additionalProperties: s.json(),
  });

export const paymentMethodListRealTimeResponseSchema: Schema<PaymentMethodListRealTimeResponse> =
  s.lazySchema(() =>
    s.object<PaymentMethodListRealTimeResponse>(
      {
        ...paymentMethodListRealTimeResponseProperties,
        name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        card: s.optional(s.lazy(() => cardListRealTimeResponseSchema)),
        fingerprint: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        authentication: s.optional(s.lazy(() => authentication6Schema)),
      },
      { additionalProperties: s.json() },
    ),
  );
