import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntryOriginPlatform = {
  Apple: "APPLE",
  Elavon: "ELAVON",
  Firstdata: "FIRSTDATA",
  Google: "GOOGLE",
  Vantiv: "VANTIV",
  Vcore: "VCORE",
  Wellsach: "WELLSACH",
  Wellsfargo: "WELLSFARGO",
  Wfsingle: "WFSINGLE",
  Worldpay: "WORLDPAY",
  Tdbankca: "TDBANKCA",
} as const;
export type EntryOriginPlatform =
  | (typeof EntryOriginPlatform)[keyof typeof EntryOriginPlatform]
  | (string & {});

export const entryOriginPlatformSchema: EnumSchema<EntryOriginPlatform> =
  s.enumOf<EntryOriginPlatform>(EntryOriginPlatform);
