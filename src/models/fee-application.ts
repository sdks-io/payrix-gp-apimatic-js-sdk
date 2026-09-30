import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeeApplication = {
  Both: "both",
  Fee: "fee",
  Collection: "collection",
} as const;
export type FeeApplication = (typeof FeeApplication)[keyof typeof FeeApplication] | (string & {});

export const feeApplicationSchema: EnumSchema<FeeApplication> = s.enumOf<FeeApplication>(FeeApplication);
