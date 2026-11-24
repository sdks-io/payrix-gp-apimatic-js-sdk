import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntryMode15 = {
  Chip: "CHIP",
  Contactless: "CONTACTLESS",
  Manual: "MANUAL",
  Swipe: "SWIPE",
} as const;
export type EntryMode15 = (typeof EntryMode15)[keyof typeof EntryMode15] | (string & {});

export const entryMode15Schema: EnumSchema<EntryMode15> = s.enumOf<EntryMode15>(EntryMode15);
