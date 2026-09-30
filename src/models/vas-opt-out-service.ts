import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VasOptOutService = {
  FraudSight: "fraudSight",
} as const;
export type VasOptOutService = (typeof VasOptOutService)[keyof typeof VasOptOutService] | (string & {});

export const vasOptOutServiceSchema: EnumSchema<VasOptOutService> =
  s.enumOf<VasOptOutService>(VasOptOutService);
