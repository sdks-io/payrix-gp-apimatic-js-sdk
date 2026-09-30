import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The platform used to process this transaction. */
export const PinlessDebitConversionsPlatform2 = {
  Vcore: "VCORE",
} as const;
export type PinlessDebitConversionsPlatform2 =
  | (typeof PinlessDebitConversionsPlatform2)[keyof typeof PinlessDebitConversionsPlatform2]
  | (string & {});

export const pinlessDebitConversionsPlatform2Schema: EnumSchema<PinlessDebitConversionsPlatform2> =
  s.enumOf<PinlessDebitConversionsPlatform2>(PinlessDebitConversionsPlatform2);
