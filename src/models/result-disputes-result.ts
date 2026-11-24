import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the result of the dispute */
export const ResultDisputesResult = {
  Pending: "PENDING",
  Fulfilled: "FULFILLED",
  Won: "WON",
  Lost: "LOST",
  Accepted: "ACCEPTED",
} as const;
export type ResultDisputesResult =
  | (typeof ResultDisputesResult)[keyof typeof ResultDisputesResult]
  | (string & {});

export const resultDisputesResultSchema: EnumSchema<ResultDisputesResult> =
  s.enumOf<ResultDisputesResult>(ResultDisputesResult);
