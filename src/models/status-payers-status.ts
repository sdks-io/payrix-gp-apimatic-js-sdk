import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The overall status of the payer.
 * * `DELETED` - The status is DELETED. Once returned in an action response for a resource. The
 *   resource has been removed from the platform.
 */
export const StatusPayersStatus = {
  Deleted: "DELETED",
} as const;
export type StatusPayersStatus = (typeof StatusPayersStatus)[keyof typeof StatusPayersStatus] | (string & {});

export const statusPayersStatusSchema: EnumSchema<StatusPayersStatus> =
  s.enumOf<StatusPayersStatus>(StatusPayersStatus);
