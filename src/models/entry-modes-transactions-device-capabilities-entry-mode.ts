import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntryModesTransactionsDeviceCapabilitiesEntryMode = {
  Chip: "CHIP",
  Contactless: "CONTACTLESS",
  Manual: "MANUAL",
  Swipe: "SWIPE",
  ContactlessSwipe: "CONTACTLESS_SWIPE",
  OpticalCharacterReader: "OPTICAL_CHARACTER_READER",
} as const;
export type EntryModesTransactionsDeviceCapabilitiesEntryMode =
  | (typeof EntryModesTransactionsDeviceCapabilitiesEntryMode)[keyof typeof EntryModesTransactionsDeviceCapabilitiesEntryMode]
  | (string & {});

export const entryModesTransactionsDeviceCapabilitiesEntryModeSchema: EnumSchema<EntryModesTransactionsDeviceCapabilitiesEntryMode> =
  s.enumOf<EntryModesTransactionsDeviceCapabilitiesEntryMode>(
    EntryModesTransactionsDeviceCapabilitiesEntryMode,
  );
