import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Value Added Service to opt out from. Currently only 'FraudSight' is supported. */
export const VasOptOutService1 = {
  FraudSight: "fraudSight",
} as const;
export type VasOptOutService1 = (typeof VasOptOutService1)[keyof typeof VasOptOutService1] | (string & {});

export const vasOptOutService1Schema: EnumSchema<VasOptOutService1> =
  s.enumOf<VasOptOutService1>(VasOptOutService1);
