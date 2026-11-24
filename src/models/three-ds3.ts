import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  preferenceAuthenticationsThreeDsPreferenceSchema,
  type PreferenceAuthenticationsThreeDsPreference,
} from "./preference-authentications-three-ds-preference.js";
import {
  sourceAuthenticationsSourceSchema,
  type SourceAuthenticationsSource,
} from "./source-authentications-source.js";
import {
  whitelistStatusAuthenticationsThreeDsWhitelistStatusSchema,
  type WhitelistStatusAuthenticationsThreeDsWhitelistStatus,
} from "./whitelist-status-authentications-three-ds-whitelist-status.js";

export type ThreeDs3 = {
  /**
   * Indicates the type of system used to initiate the authentication.
   * * `BROWSER`
   * * `MERCHANT_INITIATED`
   * * `MOBILE_SDK`
   */
  source?: SourceAuthenticationsSource;
  /**
   * Indicates whether a challenge is requested for this transaction. The Issuer may override
   * whatever preference is specified in this field.
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
  preference?: PreferenceAuthenticationsThreeDsPreference;
  /**
   * Enables the communication of trusted beneficiary/whitelist status between the ACS, the DS and
   * the 3DS Requestor (Merchant).
   * * `WHITELISTED_BY_CARDHOLDER`
   * * `NOT_WHITELISTED_BY_CARDHOLDER`
   * * `NOT_ELIGIBLE`
   * * `PENDING_CARDHOLDER_CONFIRMATION`
   * * `REJECTED_BY_CARDHOLDER`
   * * `WHITELIST_STATUS_UNKNOWN`
   */
  whitelistStatus?: WhitelistStatusAuthenticationsThreeDsWhitelistStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threeDs3Schema: Schema<ThreeDs3> = s.object<ThreeDs3>(
  {
    source: s.optional(s.lazy(() => sourceAuthenticationsSourceSchema)),
    preference: s.optional(s.lazy(() => preferenceAuthenticationsThreeDsPreferenceSchema)),
    whitelistStatus: s.optional(s.lazy(() => whitelistStatusAuthenticationsThreeDsWhitelistStatusSchema)),
    _keysMap: {
      whitelistStatus: "whitelist_status",
    },
  },
  { additionalProperties: s.json() },
);
