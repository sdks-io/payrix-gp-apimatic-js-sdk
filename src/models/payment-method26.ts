import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card14InternalSchema, card14Schema, type Card14 } from "./card14.js";
import {
  entryModeInstallmentsPaymentMethodEntryModeSchema,
  type EntryModeInstallmentsPaymentMethodEntryMode,
} from "./entry-mode-installments-payment-method-entry-mode.js";

export type PaymentMethod26 = {
  /**
   * Indicates how the payment method information was obtained by the Merchant for this transaction.
   *                          * `MOTO` - A CNP channel entry mode where the payment method
   *                            information was obtained over the phone or via postal mail.
   *                          * `ECOM` - A CNP channel entry mode where the payment method was
   *                            obtained via a browser.
   *                          * `IN_APP` - A CNP channel entry mode where the payment method was
   *                            obtained via an application and applies to digital wallets only.
   *                          * `CHIP` - A CP channel entry mode where the payment method
   *                            information was obtained from a chip. E.g. card is inserted into a
   *                            device to read the chip.
   *                          * `SWIPE` - A CP channel entry mode where the payment method
   *                            information was obtained from swiping a magnetic strip. E.g. card's
   *                            magnetic strip is swiped through a device to read the card
   *                            information.
   *                          * `MANUAL` - A CP channel entry mode where the payment method
   *                            information was obtained by manually keying the payment method
   *                            information into the device.
   *                          * `CONTACTLESS_CHIP` - A CP channel entry mode where the payment
   *                            method information was obtained by bringing the payment method to
   *                            close proximity of a device. E.g. tap a card on or near a device to
   *                            exchange card information.
   *                          * `CONTACTLESS_SWIPE` - A CP channel entry mode where the payment
   *                            method information was obtained by bringing the payment method to
   *                            close proximity of a device and also swiping the card. E.g. tap a
   *                            card on or near a device and swipe it through device to exchange
   *                            card information
   *                          * `PHONE` - A CNP channel entry mode where the payment method was
   *                            obtained over the phone.
   *                          * `MAIL` - A CNP channel entry mode where the payment method was
   *                            obtained via postal mail.
   *                          * `PRESENT`- The entry mode cannot be determined but it is a Customer
   *                            Present transaction.
   *                          * `UNKNOWN` - The entry mode for this transaction cannot be
   *                            determined.
   */
  entryMode?: EntryModeInstallmentsPaymentMethodEntryMode;
  /** The result code associated with the payment method used to process this transaction. */
  result?: string;
  /** The result message that better explains the result code. */
  message?: string;
  card?: Card14;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod26Properties: s.Shape<PaymentMethod26> = {
  entryMode: s.optional(s.lazy(() => entryModeInstallmentsPaymentMethodEntryModeSchema)),
  result: s.optional(s.string()),
  message: s.optional(s.string()),
  card: s.optional(s.lazy(() => card14InternalSchema)),
  _keysMap: {
    entryMode: "entry_mode",
  },
};

export const paymentMethod26InternalSchema: Schema<PaymentMethod26> = s.object<PaymentMethod26>(
  paymentMethod26Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod26Schema: Schema<PaymentMethod26> = s.lazySchema(() =>
  s.object<PaymentMethod26>(
    {
      ...paymentMethod26Properties,
      result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      message: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      card: s.optional(s.lazy(() => card14Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
