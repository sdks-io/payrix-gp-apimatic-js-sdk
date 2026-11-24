import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A code indicating the reason for the dispute. */
export const ReasonCodeDisputesReasonCode = {
  Fraud: "FRAUD",
  NonDelivery: "NON_DELIVERY",
  GoodsBroken: "GOODS_BROKEN",
} as const;
export type ReasonCodeDisputesReasonCode =
  | (typeof ReasonCodeDisputesReasonCode)[keyof typeof ReasonCodeDisputesReasonCode]
  | (string & {});

export const reasonCodeDisputesReasonCodeSchema: EnumSchema<ReasonCodeDisputesReasonCode> =
  s.enumOf<ReasonCodeDisputesReasonCode>(ReasonCodeDisputesReasonCode);
