import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of physical device used to process the transaction.
 * * `TERMINAL` - A device used to prompt the payer to enter their payment method credentials to
 *   process a transaction.
 * * `MOBILE_PHONE` - A mobile phone was used as the processing device.
 * * `MOBILE_POS` - Mobile device with no add-on hardware.
 * * `MOBILE_POS_PLUS_HARDWARE` - Mobile device with add-on hardware.
 * * `MOBILE_POS_PLUS_DONGLE` - Dedicated mPOS Terminal with PCI compliant dongle.
 * * `DONGLE_PIN` - Dongle with software-based application that supports PIN entry on glass.
 * * `MOBILE_POS_PIN` - Off the shelf mobile device with software-based application that supports
 *   PIN entry on glass.
 */
export const TypeTransactionsDeviceType = {
  Terminal: "TERMINAL",
  MobilePhone: "MOBILE_PHONE",
  Pos: "POS",
  MobilePos: "MOBILE_POS",
  MobilePosPlusHardware: "MOBILE_POS_PLUS_HARDWARE",
  MobilePosPlusDongle: "MOBILE_POS_PLUS_DONGLE",
  DonglePin: "DONGLE_PIN",
  MobilePosPin: "MOBILE_POS_PIN",
} as const;
export type TypeTransactionsDeviceType =
  | (typeof TypeTransactionsDeviceType)[keyof typeof TypeTransactionsDeviceType]
  | (string & {});

export const typeTransactionsDeviceTypeSchema: EnumSchema<TypeTransactionsDeviceType> =
  s.enumOf<TypeTransactionsDeviceType>(TypeTransactionsDeviceType);
