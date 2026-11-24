import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if the total amount impacted is a Debit or Credit to merchant's bank account. */
export const LastAdjustmentFundingSettlementDisputesLastAdjustmentFunding = {
  Debit: "DEBIT",
  Credit: "CREDIT",
  None: "NONE",
} as const;
export type LastAdjustmentFundingSettlementDisputesLastAdjustmentFunding =
  | (typeof LastAdjustmentFundingSettlementDisputesLastAdjustmentFunding)[keyof typeof LastAdjustmentFundingSettlementDisputesLastAdjustmentFunding]
  | (string & {});

export const lastAdjustmentFundingSettlementDisputesLastAdjustmentFundingSchema: EnumSchema<LastAdjustmentFundingSettlementDisputesLastAdjustmentFunding> =
  s.enumOf<LastAdjustmentFundingSettlementDisputesLastAdjustmentFunding>(
    LastAdjustmentFundingSettlementDisputesLastAdjustmentFunding,
  );
