import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntryModesTransactionsDeviceEntryMode = {
  Chip: "CHIP",
  Contactless: "CONTACTLESS",
  Manual: "MANUAL",
  Swipe: "SWIPE",
} as const;
export type EntryModesTransactionsDeviceEntryMode =
  | (typeof EntryModesTransactionsDeviceEntryMode)[keyof typeof EntryModesTransactionsDeviceEntryMode]
  | (string & {});

export const entryModesTransactionsDeviceEntryModeSchema: EnumSchema<EntryModesTransactionsDeviceEntryMode> =
  s.enumOf<EntryModesTransactionsDeviceEntryMode>(EntryModesTransactionsDeviceEntryMode);
