import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates where a resource object is in its life-cycle. */
export const StatusVerificationsStatus = {
  Verified: "VERIFIED",
  NotVerified: "NOT_VERIFIED",
} as const;
export type StatusVerificationsStatus =
  | (typeof StatusVerificationsStatus)[keyof typeof StatusVerificationsStatus]
  | (string & {});

export const statusVerificationsStatusSchema: EnumSchema<StatusVerificationsStatus> =
  s.enumOf<StatusVerificationsStatus>(StatusVerificationsStatus);
