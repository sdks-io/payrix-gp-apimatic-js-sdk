import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates how the payment method information was obtained by the Merchant for this transaction.
 * * `MOTO` - A CNP channel entry mode where the payment method information was obtained over the
 *   phone or via postal mail.
 * * `ECOM` - A CNP channel entry mode where the payment method was obtained via a browser.
 * * `IN_APP` - A CNP channel entry mode where the payment method was obtained via an application
 *   and applies to digital wallets only.
 * * `CHIP` - A CP channel entry mode where the payment method information was obtained from a chip.
 *   E.g. card is inserted into a device to read the chip.
 * * `SWIPE` - A CP channel entry mode where the payment method information was obtained from
 *   swiping a magnetic strip. E.g. card's magnetic strip is swiped through a device to read the
 *   card information.
 * * `MANUAL` - A CP channel entry mode where the payment method information was obtained by
 *   manually keying the payment method information into the device.
 * * `CONTACTLESS_CHIP` - A CP channel entry mode where the payment method information was obtained
 *   by bringing the payment method to close proximity of a device. E.g. tap a card on or near a
 *   device to exchange card information.
 * * `CONTACTLESS_SWIPE` - A CP channel entry mode where the payment method information was obtained
 *   by bringing the payment method to close proximity of a device and also swiping the card. E.g.
 *   tap a card on or near a device and swipe it through device to exchange card information
 * * `PHONE` - A CNP channel entry mode where the payment method was obtained over the phone.
 * * `MAIL` - A CNP channel entry mode where the payment method was obtained via postal mail.
 * * `PRESENT`- The entry mode cannot be determined but it is a Customer Present transaction.
 * * `UNKNOWN` - The entry mode for this transaction cannot be determined.
 */
export const EntryModeAuthenticationsPaymentMethodEntryMode = {
  Moto: "MOTO",
  Ecom: "ECOM",
  InApp: "IN_APP",
  Chip: "CHIP",
  Swipe: "SWIPE",
  Manual: "MANUAL",
  Phone: "PHONE",
  Mail: "MAIL",
  ContactlessChip: "CONTACTLESS_CHIP",
  ContactlessSwipe: "CONTACTLESS_SWIPE",
  Present: "PRESENT",
  Unknown: "UNKNOWN",
} as const;
export type EntryModeAuthenticationsPaymentMethodEntryMode =
  | (typeof EntryModeAuthenticationsPaymentMethodEntryMode)[keyof typeof EntryModeAuthenticationsPaymentMethodEntryMode]
  | (string & {});

export const entryModeAuthenticationsPaymentMethodEntryModeSchema: EnumSchema<EntryModeAuthenticationsPaymentMethodEntryMode> =
  s.enumOf<EntryModeAuthenticationsPaymentMethodEntryMode>(EntryModeAuthenticationsPaymentMethodEntryMode);
