import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FundingParameterLocked = {
  _0: 0,
  _1: 1,
} as const;
export type FundingParameterLocked =
  | (typeof FundingParameterLocked)[keyof typeof FundingParameterLocked]
  | (number & {});

export const fundingParameterLockedSchema: EnumSchema<FundingParameterLocked> =
  s.enumOf<FundingParameterLocked>(FundingParameterLocked);
