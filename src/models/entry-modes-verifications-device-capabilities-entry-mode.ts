import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntryModesVerificationsDeviceCapabilitiesEntryMode = {
  Chip: "CHIP",
  Contactless: "CONTACTLESS",
  Manual: "MANUAL",
  Swipe: "SWIPE",
  ContactlessSwipe: "CONTACTLESS_SWIPE",
  OpticalCharacterReader: "OPTICAL_CHARACTER_READER",
  Unknown: "UNKNOWN",
} as const;
export type EntryModesVerificationsDeviceCapabilitiesEntryMode =
  | (typeof EntryModesVerificationsDeviceCapabilitiesEntryMode)[keyof typeof EntryModesVerificationsDeviceCapabilitiesEntryMode]
  | (string & {});

export const entryModesVerificationsDeviceCapabilitiesEntryModeSchema: EnumSchema<EntryModesVerificationsDeviceCapabilitiesEntryMode> =
  s.enumOf<EntryModesVerificationsDeviceCapabilitiesEntryMode>(
    EntryModesVerificationsDeviceCapabilitiesEntryMode,
  );
