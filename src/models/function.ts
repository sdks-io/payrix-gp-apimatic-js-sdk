import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Function = {
  Business: "BUSINESS",
  PreviousBusiness: "PREVIOUS_BUSINESS",
  Shipping: "SHIPPING",
  Legal: "LEGAL",
} as const;
export type Function = (typeof Function)[keyof typeof Function] | (string & {});

export const functionSchema: EnumSchema<Function> = s.enumOf<Function>(Function);
