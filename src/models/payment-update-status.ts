import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentUpdateStatus = {
  Pending: "pending",
  Processing: "processing",
  Failed: "failed",
  Processed: "processed",
} as const;
export type PaymentUpdateStatus =
  | (typeof PaymentUpdateStatus)[keyof typeof PaymentUpdateStatus]
  | (string & {});

export const paymentUpdateStatusSchema: EnumSchema<PaymentUpdateStatus> =
  s.enumOf<PaymentUpdateStatus>(PaymentUpdateStatus);
