import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether a challenge is requested for this transaction. The Issuer may override whatever
 * preference is specified in this field.
 * * `NO_PREFERENCE` - No preference as to whether the customer is challenged
 * * `NO_CHALLENGE_REQUESTED` - Preference is for the customer not be challenged
 * * `CHALLENGE_PREFERRED` - Preference is for the customer to be challenged.
 * * `CHALLENGE_MANDATED` - A challenge is required for the transaction to be authorized due to
 *   local/regional mandates or other variables.
 *   NO_CHALLENGE_REQUESTED_TRANSACTION_RISK_ANALYSIS_PERFORMED
 * * `NO_CHALLENGE_REQUESTED_DATA_SHARE_ONLY`
 * * `NO_CHALLENGE_REQUESTED_SCA_ALREADY_PERFORMED`
 * * `NO_CHALLENGE_REQUESTED_WHITELIST`
 * * `CHALLENGE_REQUESTED_PROMPT_FOR_WHITELIST`
 */
export const PreferenceAuthenticationsThreeDsPreference = {
  NoPreference: "NO_PREFERENCE",
  NoChallengeRequested: "NO_CHALLENGE_REQUESTED",
  ChallengePreferred: "CHALLENGE_PREFERRED",
  ChallengeMandated: "CHALLENGE_MANDATED",
  NoChallengeRequestedTransactionRiskAnalysisPerformed:
    "NO_CHALLENGE_REQUESTED_TRANSACTION_RISK_ANALYSIS_PERFORMED",
  NoChallengeRequestedDataShareOnly: "NO_CHALLENGE_REQUESTED_DATA_SHARE_ONLY",
  NoChallengeRequestedScaAlreadyPerformed: "NO_CHALLENGE_REQUESTED_SCA_ALREADY_PERFORMED",
  NoChallengeRequestedWhitelist: "NO_CHALLENGE_REQUESTED_WHITELIST",
  ChallengeRequestedPromptForWhitelist: "CHALLENGE_REQUESTED_PROMPT_FOR_WHITELIST",
} as const;
export type PreferenceAuthenticationsThreeDsPreference =
  | (typeof PreferenceAuthenticationsThreeDsPreference)[keyof typeof PreferenceAuthenticationsThreeDsPreference]
  | (string & {});

export const preferenceAuthenticationsThreeDsPreferenceSchema: EnumSchema<PreferenceAuthenticationsThreeDsPreference> =
  s.enumOf<PreferenceAuthenticationsThreeDsPreference>(PreferenceAuthenticationsThreeDsPreference);
