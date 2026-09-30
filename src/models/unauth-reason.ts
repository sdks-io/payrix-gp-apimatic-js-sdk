import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UnauthReason = {
  Incomplete: "incomplete",
  Timeout: "timeout",
  ClerkCancelled: "clerkCancelled",
  CustomerCancelled: "customerCancelled",
  Misdispense: "misdispense",
  HardwareFailure: "hardwareFailure",
  SuspectedFraud: "suspectedFraud",
} as const;
export type UnauthReason = (typeof UnauthReason)[keyof typeof UnauthReason] | (string & {});

export const unauthReasonSchema: EnumSchema<UnauthReason> = s.enumOf<UnauthReason>(UnauthReason);
