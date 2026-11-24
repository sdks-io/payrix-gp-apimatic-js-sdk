import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates where a resource object is in it's lifecycle. */
export const StatusFundsStatus = {
  Captured: "CAPTURED",
  Decline: "DECLINE",
  Rejected: "REJECTED",
} as const;
export type StatusFundsStatus = (typeof StatusFundsStatus)[keyof typeof StatusFundsStatus] | (string & {});

export const statusFundsStatusSchema: EnumSchema<StatusFundsStatus> =
  s.enumOf<StatusFundsStatus>(StatusFundsStatus);
