import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackMessageStatus = {
  Requested: "requested",
  Processing: "processing",
  Failed: "failed",
  Denied: "denied",
  Processed: "processed",
} as const;
export type ChargebackMessageStatus =
  | (typeof ChargebackMessageStatus)[keyof typeof ChargebackMessageStatus]
  | (string & {});

export const chargebackMessageStatusSchema: EnumSchema<ChargebackMessageStatus> =
  s.enumOf<ChargebackMessageStatus>(ChargebackMessageStatus);
