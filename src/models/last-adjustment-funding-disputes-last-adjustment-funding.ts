import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if the total amount impacted is a Debit or Credit to merchant's bank account. */
export const LastAdjustmentFundingDisputesLastAdjustmentFunding = {
  Debit: "DEBIT",
  Credit: "CREDIT",
  None: "NONE",
} as const;
export type LastAdjustmentFundingDisputesLastAdjustmentFunding =
  | (typeof LastAdjustmentFundingDisputesLastAdjustmentFunding)[keyof typeof LastAdjustmentFundingDisputesLastAdjustmentFunding]
  | (string & {});

export const lastAdjustmentFundingDisputesLastAdjustmentFundingSchema: EnumSchema<LastAdjustmentFundingDisputesLastAdjustmentFunding> =
  s.enumOf<LastAdjustmentFundingDisputesLastAdjustmentFunding>(
    LastAdjustmentFundingDisputesLastAdjustmentFunding,
  );
