import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason for the auth reversal. This field is set to 'customerCancelled' by default.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `incomplete` - **Transaction Incomplete.**
 *
 * - `timeout` - **Transaction Timeout.**
 *
 * - `clerkCancelled` - **Transaction Cancelled by Clerk.**
 *
 * - `customerCancelled` - **Transaction Cancelled by Customer.**
 *
 * - `misdispense` - **Misdispense.**
 *
 * - `hardwareFailure` - **Hardware Failure.**
 *
 * - `suspectedFraud` - **Suspected Fraud.** </details>
 */
export const UnauthReason1 = {
  Incomplete: "incomplete",
  Timeout: "timeout",
  ClerkCancelled: "clerkCancelled",
  CustomerCancelled: "customerCancelled",
  Misdispense: "misdispense",
  HardwareFailure: "hardwareFailure",
  SuspectedFraud: "suspectedFraud",
} as const;
export type UnauthReason1 = (typeof UnauthReason1)[keyof typeof UnauthReason1] | (string & {});

export const unauthReason1Schema: EnumSchema<UnauthReason1> = s.enumOf<UnauthReason1>(UnauthReason1);
