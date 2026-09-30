import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisbursementResultCode = {
  Pending: "pending",
  Internal: "internal",
  Nsf: "nsf",
  BadAccount: "badAccount",
  Unauthorized: "unauthorized",
  General: "general",
  Noc: "noc",
  Parameter: "parameter",
  SameDay: "sameDay",
  TransferDetails: "transferDetails",
  Platform: "platform",
} as const;
export type DisbursementResultCode =
  | (typeof DisbursementResultCode)[keyof typeof DisbursementResultCode]
  | (string & {});

export const disbursementResultCodeSchema: EnumSchema<DisbursementResultCode> =
  s.enumOf<DisbursementResultCode>(DisbursementResultCode);
