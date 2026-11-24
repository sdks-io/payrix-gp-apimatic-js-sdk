import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the result of the dispute */
export const ResultSettlementDisputesResult = {
  Pending: "PENDING",
  Fulfilled: "FULFILLED",
  Won: "WON",
  Lost: "LOST",
  Accepted: "ACCEPTED",
} as const;
export type ResultSettlementDisputesResult =
  | (typeof ResultSettlementDisputesResult)[keyof typeof ResultSettlementDisputesResult]
  | (string & {});

export const resultSettlementDisputesResultSchema: EnumSchema<ResultSettlementDisputesResult> =
  s.enumOf<ResultSettlementDisputesResult>(ResultSettlementDisputesResult);
