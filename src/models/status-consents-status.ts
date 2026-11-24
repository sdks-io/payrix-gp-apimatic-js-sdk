import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the consent */
export const StatusConsentsStatus = {
  Initiated: "INITIATED",
  Approved: "APPROVED",
  Cancelled: "CANCELLED",
  Declined: "DECLINED",
  Active: "ACTIVE",
} as const;
export type StatusConsentsStatus =
  | (typeof StatusConsentsStatus)[keyof typeof StatusConsentsStatus]
  | (string & {});

export const statusConsentsStatusSchema: EnumSchema<StatusConsentsStatus> =
  s.enumOf<StatusConsentsStatus>(StatusConsentsStatus);
