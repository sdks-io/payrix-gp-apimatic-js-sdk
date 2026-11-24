import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeSettlementDisputesActionType = {
  DisputeList: "DISPUTE_LIST",
} as const;
export type TypeSettlementDisputesActionType =
  | (typeof TypeSettlementDisputesActionType)[keyof typeof TypeSettlementDisputesActionType]
  | (string & {});

export const typeSettlementDisputesActionTypeSchema: EnumSchema<TypeSettlementDisputesActionType> =
  s.enumOf<TypeSettlementDisputesActionType>(TypeSettlementDisputesActionType);
