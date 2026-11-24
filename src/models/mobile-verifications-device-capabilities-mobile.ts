import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MobileVerificationsDeviceCapabilitiesMobile = {
  IntegratedCardReader: "INTEGRATED_CARD_READER",
  SeparateCardReader: "SEPARATE_CARD_READER",
  OffTheShelf: "OFF_THE_SHELF",
  SoftwareBasedPinEntry: "SOFTWARE_BASED_PIN_ENTRY",
} as const;
export type MobileVerificationsDeviceCapabilitiesMobile =
  | (typeof MobileVerificationsDeviceCapabilitiesMobile)[keyof typeof MobileVerificationsDeviceCapabilitiesMobile]
  | (string & {});

export const mobileVerificationsDeviceCapabilitiesMobileSchema: EnumSchema<MobileVerificationsDeviceCapabilitiesMobile> =
  s.enumOf<MobileVerificationsDeviceCapabilitiesMobile>(MobileVerificationsDeviceCapabilitiesMobile);
