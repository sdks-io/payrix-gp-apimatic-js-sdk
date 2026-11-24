import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicated where the dispute is in the life-cycle. */
export const StatusSettlementDisputesStatus = {
  Funded: "FUNDED",
} as const;
export type StatusSettlementDisputesStatus =
  | (typeof StatusSettlementDisputesStatus)[keyof typeof StatusSettlementDisputesStatus]
  | (string & {});

export const statusSettlementDisputesStatusSchema: EnumSchema<StatusSettlementDisputesStatus> =
  s.enumOf<StatusSettlementDisputesStatus>(StatusSettlementDisputesStatus);
