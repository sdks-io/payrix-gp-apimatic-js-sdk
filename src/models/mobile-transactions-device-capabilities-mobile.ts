import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MobileTransactionsDeviceCapabilitiesMobile = {
  IntegratedCardReader: "INTEGRATED_CARD_READER",
  SeparateCardReader: "SEPARATE_CARD_READER",
  OffTheShelf: "OFF_THE_SHELF",
  SoftwareBasedPinEntry: "SOFTWARE_BASED_PIN_ENTRY",
} as const;
export type MobileTransactionsDeviceCapabilitiesMobile =
  | (typeof MobileTransactionsDeviceCapabilitiesMobile)[keyof typeof MobileTransactionsDeviceCapabilitiesMobile]
  | (string & {});

export const mobileTransactionsDeviceCapabilitiesMobileSchema: EnumSchema<MobileTransactionsDeviceCapabilitiesMobile> =
  s.enumOf<MobileTransactionsDeviceCapabilitiesMobile>(MobileTransactionsDeviceCapabilitiesMobile);
