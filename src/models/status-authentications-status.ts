import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where the authentication is in its lifecycle
 * * `AVAILABLE` - An authentication mechanism is available. The next step is to initiate the
 *   authentication. No liability shift at this stage.
 * * `NOT_AVAILABLE` - The authentication mechanism is not available. The next step is to check for
 *   availability of another authentication mechanism. No liability shift at this stage.
 * * `NOT_ENROLLED` - The payer's payment method is not enrolled in 3DS version 1 or version 2. If
 *   the card is a Visa or Mastercard a liability shift is achieved and the recommendation is
 *   execute the care authorization. However there us no liability shift at this stage for Amex,so
 *   the recommendation is not for go for card authorization.
 * * `CHALLENGE_REQUIRED` - The authentication mechanism is available and the next step is to
 *   facilitate authentication of the payer. No liability shift at this stage.
 * * `SUCCESS_AUTHENTICATED` - The authentication of the payer has been a success and a liability
 *   shift has been achieved so the recommendation is to go for authorization
 * * `SUCCESS_ATTEMPT_MADE` - A valid attempt to authenticate the payer has been executed and a
 *   liability shift has been achieved so the recommendation is to go for authorization.
 * * `NOT_AUTHENTICATED` - The payer did not authenticate therefore a liability shift has not been
 *   achieved. The recommendation is to not proceed with card authorization.
 * * `FAILED` - A step in the authentication process has errored and there do not go for card
 *   authorization.
 * * `CHALLENGE_PREFERENCE_ACKNOWLEDGED_INFORMATIONAL_ONLY`
 */
export const StatusAuthenticationsStatus = {
  Available: "AVAILABLE",
  NotEnrolled: "NOT_ENROLLED",
  ChallengeRequired: "CHALLENGE_REQUIRED",
  SuccessAuthenticated: "SUCCESS_AUTHENTICATED",
  SuccessAttemptMade: "SUCCESS_ATTEMPT_MADE",
  NotAuthenticated: "NOT_AUTHENTICATED",
  ChallengePreferenceAcknowledgedInformationalOnly: "CHALLENGE_PREFERENCE_ACKNOWLEDGED_INFORMATIONAL_ONLY",
  Failed: "FAILED",
  NotAvailable: "NOT_AVAILABLE",
} as const;
export type StatusAuthenticationsStatus =
  | (typeof StatusAuthenticationsStatus)[keyof typeof StatusAuthenticationsStatus]
  | (string & {});

export const statusAuthenticationsStatusSchema: EnumSchema<StatusAuthenticationsStatus> =
  s.enumOf<StatusAuthenticationsStatus>(StatusAuthenticationsStatus);
