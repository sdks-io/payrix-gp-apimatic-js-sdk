import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cardRequestCurrencyConversionInternalSchema,
  cardRequestCurrencyConversionSchema,
  type CardRequestCurrencyConversion,
} from "./card-request-currency-conversion.js";
import {
  entryModeAuthenticationsPaymentMethodEntryModeSchema,
  type EntryModeAuthenticationsPaymentMethodEntryMode,
} from "./entry-mode-authentications-payment-method-entry-mode.js";

export type PaymentMethod6 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
  /**
   * The name of the Payment Method. Note for European merchants: This field is mandatory for SCA.
   */
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
  card?: CardRequestCurrencyConversion;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod6Properties: s.Shape<PaymentMethod6> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  entryMode: s.optional(s.lazy(() => entryModeAuthenticationsPaymentMethodEntryModeSchema)),
  card: s.optional(s.lazy(() => cardRequestCurrencyConversionInternalSchema)),
  _keysMap: {
    entryMode: "entry_mode",
  },
};

export const paymentMethod6InternalSchema: Schema<PaymentMethod6> = s.object<PaymentMethod6>(
  paymentMethod6Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod6Schema: Schema<PaymentMethod6> = s.lazySchema(() =>
  s.object<PaymentMethod6>(
    {
      ...paymentMethod6Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      card: s.optional(s.lazy(() => cardRequestCurrencyConversionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
