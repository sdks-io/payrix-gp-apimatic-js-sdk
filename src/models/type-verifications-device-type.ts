import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of physical device used to process the transaction.
 *
 *     * `MOBILE_POS` - Mobile device with no add-on hardware.
 *     * `MOBILE_POS_PLUS_HARDWARE` - Mobile device with add-on hardware.
 *     * `MOBILE_POS_PLUS_DONGLE` - Dedicated mPOS Terminal with PCI compliant dongle.
 *     * `DONGLE_PIN` - Dongle with software-based application that supports PIN entry on glass.
 *     * `MOBILE_POS_PIN` - Off the shelf mobile device with software-based application that
 *       supports PIN entry on glass.
 *    * 'OFF_THE_SHELF' - Off the shelf mobile device
 */
export const TypeVerificationsDeviceType = {
  MobilePos: "MOBILE_POS",
  MobilePosPlusHardware: "MOBILE_POS_PLUS_HARDWARE",
  MobilePosPlusDongle: "MOBILE_POS_PLUS_DONGLE",
  DonglePin: "DONGLE_PIN",
  MobilePosPin: "MOBILE_POS_PIN",
  OffTheShelf: "OFF_THE_SHELF",
} as const;
export type TypeVerificationsDeviceType =
  | (typeof TypeVerificationsDeviceType)[keyof typeof TypeVerificationsDeviceType]
  | (string & {});

export const typeVerificationsDeviceTypeSchema: EnumSchema<TypeVerificationsDeviceType> =
  s.enumOf<TypeVerificationsDeviceType>(TypeVerificationsDeviceType);
