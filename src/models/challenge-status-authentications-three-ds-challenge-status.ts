import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether a challenge is required due to local/regional mandates or another variable.
 * * `MANDATED`
 * * `NOT_MANDATED`
 * * `UNKNOWN`
 */
export const ChallengeStatusAuthenticationsThreeDsChallengeStatus = {
  Mandated: "MANDATED",
  NotMandated: "NOT_MANDATED",
  Unknown: "UNKNOWN",
} as const;
export type ChallengeStatusAuthenticationsThreeDsChallengeStatus =
  | (typeof ChallengeStatusAuthenticationsThreeDsChallengeStatus)[keyof typeof ChallengeStatusAuthenticationsThreeDsChallengeStatus]
  | (string & {});

export const challengeStatusAuthenticationsThreeDsChallengeStatusSchema: EnumSchema<ChallengeStatusAuthenticationsThreeDsChallengeStatus> =
  s.enumOf<ChallengeStatusAuthenticationsThreeDsChallengeStatus>(
    ChallengeStatusAuthenticationsThreeDsChallengeStatus,
  );
