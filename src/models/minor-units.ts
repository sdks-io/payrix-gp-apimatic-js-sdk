import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The number of decimal places of the payer currency. This field is intended for formatting and
 * display purposes only.
 */
export const MinorUnits = {
  _0: "0",
  _2: "2",
  _3: "3",
} as const;
export type MinorUnits = (typeof MinorUnits)[keyof typeof MinorUnits] | (string & {});

export const minorUnitsSchema: EnumSchema<MinorUnits> = s.enumOf<MinorUnits>(MinorUnits);
