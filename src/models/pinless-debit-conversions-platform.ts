import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PinlessDebitConversionsPlatform = {
  Vcore: "VCORE",
} as const;
export type PinlessDebitConversionsPlatform =
  | (typeof PinlessDebitConversionsPlatform)[keyof typeof PinlessDebitConversionsPlatform]
  | (string & {});

export const pinlessDebitConversionsPlatformSchema: EnumSchema<PinlessDebitConversionsPlatform> =
  s.enumOf<PinlessDebitConversionsPlatform>(PinlessDebitConversionsPlatform);
