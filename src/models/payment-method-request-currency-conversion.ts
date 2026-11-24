import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cardRequestCurrencyConversionInternalSchema,
  cardRequestCurrencyConversionSchema,
  type CardRequestCurrencyConversion,
} from "./card-request-currency-conversion.js";
import { entryMode5Schema, type EntryMode5 } from "./entry-mode5.js";

export type PaymentMethodRequestCurrencyConversion = {
  /**
   * Indicates how the payment method information was obtained by the Merchant for this transaction.
   *   * MOTO - A CNP channel entry mode where the payment method information was obtained over the
   *     phone or via postal mail.
   *   * ECOM - A CNP channel entry mode where the payment method was obtained via a browser.
   *   * IN_APP - A CNP channel entry mode where the payment method was obtained via an application
   *     and applies to digital wallets only.
   *   * CHIP - A CP channel entry mode where the payment method information was obtained from a
   *     chip. E.g. card is inserted into a device to read the chip.
   *   * SWIPE - A CP channel entry mode where the payment method information was obtained from
   *     swiping a magnetic strip. E.g. card's magnetic strip is swiped through a device to read the
   *     card information.
   *   * MANUAL - A CP channel entry mode where the payment method information was obtained by
   *     manually keying the payment method information into the device.
   *   * CONTACTLESS_CHIP - A CP channel entry mode where the payment method information was
   *     obtained by bringing the payment method to close proximity of a device. E.g. tap a cardon
   *     or near a device to exchange card information.
   *   * CONTACTLESS_SWIPE - A CP channel entry mode where the payment method information was
   *     obtained by bringing the payment method to close proximity of a device and also swiping the
   *     card. E.g. tap a card on or near a device and swipe it through device to exchange card
   *     information
   *   * PHONE - A CNP channel entry mode where the payment method was obtained over the phone.
   *   * MAIL - A CNP channel entry mode where the payment method was obtained via postal mail.
   */
  entryMode?: EntryMode5;
  card?: CardRequestCurrencyConversion;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodRequestCurrencyConversionProperties: s.Shape<PaymentMethodRequestCurrencyConversion> = {
  entryMode: s.optional(s.lazy(() => entryMode5Schema)),
  card: s.optional(s.lazy(() => cardRequestCurrencyConversionInternalSchema)),
  _keysMap: {
    entryMode: "entry_mode",
  },
};

export const paymentMethodRequestCurrencyConversionInternalSchema: Schema<PaymentMethodRequestCurrencyConversion> =
  s.object<PaymentMethodRequestCurrencyConversion>(paymentMethodRequestCurrencyConversionProperties, {
    additionalProperties: s.json(),
  });

export const paymentMethodRequestCurrencyConversionSchema: Schema<PaymentMethodRequestCurrencyConversion> =
  s.lazySchema(() =>
    s.object<PaymentMethodRequestCurrencyConversion>(
      {
        ...paymentMethodRequestCurrencyConversionProperties,
        card: s.optional(s.lazy(() => cardRequestCurrencyConversionSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
