import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A code indicating the reason for the dispute. */
export const ReasonCodeSettlementDisputesReasonCode = {
  Fraud: "FRAUD",
  NonDelivery: "NON_DELIVERY",
  GoodsBroken: "GOODS_BROKEN",
} as const;
export type ReasonCodeSettlementDisputesReasonCode =
  | (typeof ReasonCodeSettlementDisputesReasonCode)[keyof typeof ReasonCodeSettlementDisputesReasonCode]
  | (string & {});

export const reasonCodeSettlementDisputesReasonCodeSchema: EnumSchema<ReasonCodeSettlementDisputesReasonCode> =
  s.enumOf<ReasonCodeSettlementDisputesReasonCode>(ReasonCodeSettlementDisputesReasonCode);
