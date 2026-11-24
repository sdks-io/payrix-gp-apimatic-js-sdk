import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntryMode16 = {
  Chip: "CHIP",
  Contactless: "CONTACTLESS",
  Manual: "MANUAL",
  Swipe: "SWIPE",
  ContactlessSwipe: "CONTACTLESS_SWIPE",
  OpticalCharacterReader: "OPTICAL_CHARACTER_READER",
} as const;
export type EntryMode16 = (typeof EntryMode16)[keyof typeof EntryMode16] | (string & {});

export const entryMode16Schema: EnumSchema<EntryMode16> = s.enumOf<EntryMode16>(EntryMode16);
