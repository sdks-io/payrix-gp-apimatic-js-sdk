import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Mobile = {
  IntegratedCardReader: "INTEGRATED_CARD_READER",
  SeparateCardReader: "SEPARATE_CARD_READER",
  OffTheShelf: "OFF_THE_SHELF",
  SoftwareBasedPinEntry: "SOFTWARE_BASED_PIN_ENTRY",
} as const;
export type Mobile = (typeof Mobile)[keyof typeof Mobile] | (string & {});

export const mobileSchema: EnumSchema<Mobile> = s.enumOf<Mobile>(Mobile);
