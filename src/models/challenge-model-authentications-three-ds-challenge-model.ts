import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of authentication method the Issuer will use to challenge the customer.
 * * `STATIC_CHALLENGE`
 * * `DYNAMIC_CHALLENGE`
 * * `OUT_OF_BAND_CHALLENGE`
 * * `DECOUPLED`
 */
export const ChallengeModelAuthenticationsThreeDsChallengeModel = {
  StaticChallenge: "STATIC_CHALLENGE",
  DynamicChallenge: "DYNAMIC_CHALLENGE",
  OutOfBandChallenge: "OUT_OF_BAND_CHALLENGE",
  Decoupled: "DECOUPLED",
} as const;
export type ChallengeModelAuthenticationsThreeDsChallengeModel =
  | (typeof ChallengeModelAuthenticationsThreeDsChallengeModel)[keyof typeof ChallengeModelAuthenticationsThreeDsChallengeModel]
  | (string & {});

export const challengeModelAuthenticationsThreeDsChallengeModelSchema: EnumSchema<ChallengeModelAuthenticationsThreeDsChallengeModel> =
  s.enumOf<ChallengeModelAuthenticationsThreeDsChallengeModel>(
    ChallengeModelAuthenticationsThreeDsChallengeModel,
  );
