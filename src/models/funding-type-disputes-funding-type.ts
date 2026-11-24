import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if the amount relates to a Debit or Credit to the merchant's bank account. */
export const FundingTypeDisputesFundingType = {
  Debit: "DEBIT",
  Credit: "CREDIT",
} as const;
export type FundingTypeDisputesFundingType =
  | (typeof FundingTypeDisputesFundingType)[keyof typeof FundingTypeDisputesFundingType]
  | (string & {});

export const fundingTypeDisputesFundingTypeSchema: EnumSchema<FundingTypeDisputesFundingType> =
  s.enumOf<FundingTypeDisputesFundingType>(FundingTypeDisputesFundingType);
