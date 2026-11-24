import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The overall status of the resource.
 *                   * `SUCCESS` - indicates the instant success of of a standalone transfer.
 *                   * `FAILED` - indicates the failure of an instant standalone transfer.
 */
export const StatusTransfersStatus = {
  Success: "SUCCESS",
  Failed: "FAILED",
  Funded: "FUNDED",
} as const;
export type StatusTransfersStatus =
  | (typeof StatusTransfersStatus)[keyof typeof StatusTransfersStatus]
  | (string & {});

export const statusTransfersStatusSchema: EnumSchema<StatusTransfersStatus> =
  s.enumOf<StatusTransfersStatus>(StatusTransfersStatus);
