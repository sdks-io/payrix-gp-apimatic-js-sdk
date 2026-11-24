import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether there has been suspicious activity on this customer's account, including
 * fraudulent activity. Note for European merchants: This field is recommended for SCA.
 * * `SUSPICIOUS_ACTIVITY`
 * * `NO_SUSPICIOUS_ACTIVITY`
 */
export const SuspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivity = {
  SuspiciousActivity: "SUSPICIOUS_ACTIVITY",
  NoSuspiciousActivity: "NO_SUSPICIOUS_ACTIVITY",
} as const;
export type SuspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivity =
  | (typeof SuspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivity)[keyof typeof SuspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivity]
  | (string & {});

export const suspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivitySchema: EnumSchema<SuspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivity> =
  s.enumOf<SuspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivity>(
    SuspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivity,
  );
