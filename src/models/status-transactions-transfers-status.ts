import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The overall status of the instance of the resource. */
export const StatusTransactionsTransfersStatus = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type StatusTransactionsTransfersStatus =
  | (typeof StatusTransactionsTransfersStatus)[keyof typeof StatusTransactionsTransfersStatus]
  | (string & {});

export const statusTransactionsTransfersStatusSchema: EnumSchema<StatusTransactionsTransfersStatus> =
  s.enumOf<StatusTransactionsTransfersStatus>(StatusTransactionsTransfersStatus);
