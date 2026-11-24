import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Functions2 = {
  Business: "BUSINESS",
  PreviousBusiness: "PREVIOUS_BUSINESS",
  Shipping: "SHIPPING",
  Legal: "LEGAL",
} as const;
export type Functions2 = (typeof Functions2)[keyof typeof Functions2] | (string & {});

export const functions2Schema: EnumSchema<Functions2> = s.enumOf<Functions2>(Functions2);
