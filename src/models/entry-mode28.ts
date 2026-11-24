import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntryMode28 = {
  Chip: "CHIP",
  Contactless: "CONTACTLESS",
  Manual: "MANUAL",
  Swipe: "SWIPE",
  ContactlessSwipe: "CONTACTLESS_SWIPE",
  OpticalCharacterReader: "OPTICAL_CHARACTER_READER",
  Unknown: "UNKNOWN",
} as const;
export type EntryMode28 = (typeof EntryMode28)[keyof typeof EntryMode28] | (string & {});

export const entryMode28Schema: EnumSchema<EntryMode28> = s.enumOf<EntryMode28>(EntryMode28);
