import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether a transaction qualifies as an authenticated transaction or account
 * verification.
 * * `AUTHENTICATION_SUCCESSFUL`
 * * `AUTHENTICATION_FAILED`
 * * `AUTHENTICATION_COULD_NOT_BE_PERFORMED`
 * * `AUTHENTICATION_ATTEMPTED_BUT_NOT_SUCCESSFUL`
 * * `CHALLENGE_REQUIRED`
 * * `AUTHENTICATION_ISSUER_REJECTED`
 * * `DECOUPLED_AUTHENTICATION_CONFIRMED`
 * * `CHALLENGE_PREFERENCE_ACKNOWLEDGED_INFORMATIONAL_ONLY`
 */
export const StatusAuthenticationsThreeDsStatus = {
  AuthenticationSuccessful: "AUTHENTICATION_SUCCESSFUL",
  AuthenticationFailed: "AUTHENTICATION_FAILED",
  AuthenticationCouldNotBePerformed: "AUTHENTICATION_COULD_NOT_BE_PERFORMED",
  AuthenticationAttemptedButNotSuccessful: "AUTHENTICATION_ATTEMPTED_BUT_NOT_SUCCESSFUL",
  ChallengeRequired: "CHALLENGE_REQUIRED",
  AuthenticationIssuerRejected: "AUTHENTICATION_ISSUER_REJECTED",
  DecoupledAuthenticationConfirmed: "DECOUPLED_AUTHENTICATION_CONFIRMED",
  ChallengePreferenceAcknowledgedInformationalOnly: "CHALLENGE_PREFERENCE_ACKNOWLEDGED_INFORMATIONAL_ONLY",
} as const;
export type StatusAuthenticationsThreeDsStatus =
  | (typeof StatusAuthenticationsThreeDsStatus)[keyof typeof StatusAuthenticationsThreeDsStatus]
  | (string & {});

export const statusAuthenticationsThreeDsStatusSchema: EnumSchema<StatusAuthenticationsThreeDsStatus> =
  s.enumOf<StatusAuthenticationsThreeDsStatus>(StatusAuthenticationsThreeDsStatus);
