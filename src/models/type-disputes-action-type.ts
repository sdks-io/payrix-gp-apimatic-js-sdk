import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeDisputesActionType = {
  DisputeSingle: "DISPUTE_SINGLE",
  DisputeList: "DISPUTE_LIST",
  Challenge: "CHALLENGE",
  Accept: "ACCEPT",
} as const;
export type TypeDisputesActionType =
  | (typeof TypeDisputesActionType)[keyof typeof TypeDisputesActionType]
  | (string & {});

export const typeDisputesActionTypeSchema: EnumSchema<TypeDisputesActionType> =
  s.enumOf<TypeDisputesActionType>(TypeDisputesActionType);
