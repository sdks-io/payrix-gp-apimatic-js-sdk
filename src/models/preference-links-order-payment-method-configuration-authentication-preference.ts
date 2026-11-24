import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether a challenge is requested for this transaction. The Issuer may override whatever
 * preference is specified in this field. Allowed values please refer to authentication
 * specification
 */
export const PreferenceLinksOrderPaymentMethodConfigurationAuthenticationPreference = {
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
export type PreferenceLinksOrderPaymentMethodConfigurationAuthenticationPreference =
  | (typeof PreferenceLinksOrderPaymentMethodConfigurationAuthenticationPreference)[keyof typeof PreferenceLinksOrderPaymentMethodConfigurationAuthenticationPreference]
  | (string & {});

export const preferenceLinksOrderPaymentMethodConfigurationAuthenticationPreferenceSchema: EnumSchema<PreferenceLinksOrderPaymentMethodConfigurationAuthenticationPreference> =
  s.enumOf<PreferenceLinksOrderPaymentMethodConfigurationAuthenticationPreference>(
    PreferenceLinksOrderPaymentMethodConfigurationAuthenticationPreference,
  );
