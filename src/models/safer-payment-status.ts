import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SaferPaymentStatus = {
  Compliance: "compliance",
  NonCompliance: "non-compliance",
  Pending: "pending",
} as const;
export type SaferPaymentStatus = (typeof SaferPaymentStatus)[keyof typeof SaferPaymentStatus] | (string & {});

export const saferPaymentStatusSchema: EnumSchema<SaferPaymentStatus> =
  s.enumOf<SaferPaymentStatus>(SaferPaymentStatus);
