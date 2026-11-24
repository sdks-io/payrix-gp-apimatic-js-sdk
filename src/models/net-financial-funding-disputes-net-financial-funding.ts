import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if the total amount impacted is a Debit or Credit to Merchant's bank account. */
export const NetFinancialFundingDisputesNetFinancialFunding = {
  Debit: "DEBIT",
  Credit: "CREDIT",
  None: "NONE",
} as const;
export type NetFinancialFundingDisputesNetFinancialFunding =
  | (typeof NetFinancialFundingDisputesNetFinancialFunding)[keyof typeof NetFinancialFundingDisputesNetFinancialFunding]
  | (string & {});

export const netFinancialFundingDisputesNetFinancialFundingSchema: EnumSchema<NetFinancialFundingDisputesNetFinancialFunding> =
  s.enumOf<NetFinancialFundingDisputesNetFinancialFunding>(NetFinancialFundingDisputesNetFinancialFunding);
