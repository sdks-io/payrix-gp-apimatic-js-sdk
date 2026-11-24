import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card13InternalSchema, card13Schema, type Card13 } from "./card13.js";
import { encryptionInternalSchema, encryptionSchema, type Encryption } from "./encryption.js";
import {
  entryModeInstallmentsPaymentMethodEntryModeSchema,
  type EntryModeInstallmentsPaymentMethodEntryMode,
} from "./entry-mode-installments-payment-method-entry-mode.js";
import {
  usageModeInstallmentsPaymentMethodUsageModeSchema,
  type UsageModeInstallmentsPaymentMethodUsageMode,
} from "./usage-mode-installments-payment-method-usage-mode.js";

export type PaymentMethod25 = {
  /**
   * Unique platform generated id used to reference a stored payment method on the platform. Often
   * referred to as the payment method token. This value can be used instead of payment method
   * details such as a card number and expiry date.
   */
  id?: string;
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
  /**
   * Indicates the behaviour of the payment method token. This functionality is available based on
   * your life configuration.
   * * `USE_CARD_NUMBER` - When using the payment method token to transaction process, this
   *   indicates to use the card number also known as the PAN or FPAN.
   * * `USE_NETWORK_TOKEN` - When using the payment method token to transaction process, this
   *   indicates to use the network token instead of the card number.
   */
  usageMode?: UsageModeInstallmentsPaymentMethodUsageMode;
  card?: Card13;
  encryption?: Encryption;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethod25Properties: s.Shape<PaymentMethod25> = {
  id: s.optional(s.string()),
  entryMode: s.optional(s.lazy(() => entryModeInstallmentsPaymentMethodEntryModeSchema)),
  usageMode: s.optional(s.lazy(() => usageModeInstallmentsPaymentMethodUsageModeSchema)),
  card: s.optional(s.lazy(() => card13InternalSchema)),
  encryption: s.optional(s.lazy(() => encryptionInternalSchema)),
  _keysMap: {
    entryMode: "entry_mode",
    usageMode: "usage_mode",
  },
};

export const paymentMethod25InternalSchema: Schema<PaymentMethod25> = s.object<PaymentMethod25>(
  paymentMethod25Properties,
  { additionalProperties: s.json() },
);

export const paymentMethod25Schema: Schema<PaymentMethod25> = s.lazySchema(() =>
  s.object<PaymentMethod25>(
    {
      ...paymentMethod25Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      card: s.optional(s.lazy(() => card13Schema)),
      encryption: s.optional(s.lazy(() => encryptionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
