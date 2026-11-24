import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  acsDecoupledResponseIndicatorSchema,
  type AcsDecoupledResponseIndicator,
} from "./acs-decoupled-response-indicator.js";
import {
  authenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestTypeSchema,
  type AuthenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestType,
} from "./authentication-request-type-authentications-three-ds-authentication-request-type.js";
import {
  challengeModelAuthenticationsThreeDsChallengeModelSchema,
  type ChallengeModelAuthenticationsThreeDsChallengeModel,
} from "./challenge-model-authentications-three-ds-challenge-model.js";
import {
  liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema,
  type LiabilityShiftAuthenticationsThreeDsLiabilityShift,
} from "./liability-shift-authentications-three-ds-liability-shift.js";
import {
  statusAuthenticationsThreeDsStatusSchema,
  type StatusAuthenticationsThreeDsStatus,
} from "./status-authentications-three-ds-status.js";
import {
  statusReasonAuthenticationsThreeDsStatusReasonSchema,
  type StatusReasonAuthenticationsThreeDsStatusReason,
} from "./status-reason-authentications-three-ds-status-reason.js";
import {
  whitelistStatusAuthenticationsThreeDsWhitelistStatusSchema,
  type WhitelistStatusAuthenticationsThreeDsWhitelistStatus,
} from "./whitelist-status-authentications-three-ds-whitelist-status.js";

export type ThreeDs6 = {
  /** Unique transaction identifier assigned by the ACS. */
  acsTransRef?: string;
  /**
   * The reference created by the 3DSecure Directory Server to identify the specific authentication
   * attempt.
   */
  dsTransRef?: string;
  /**
   * The reference created by the 3DSecure provider to identify the specific authentication attempt.
   */
  serverTransRef?: string;
  /** Certification reference Number assigned by the ACS. */
  acsReferenceNumber?: string;
  /**
   * Indicates if the payment has been successfully completed authentication, either by the customer
   * during 3DS or using 3RI in a merchant initiated transaction. If the value returned is YES, then
   * it's recommended to proceed and execute a card authorization. In the event of a "fraudulent"
   * chargeback from the customer, the liability for that dispute has shifted to the issuing bank
   * and away from the merchant.
   * * `YES`
   * * `NO`
   * * `UNSURE`
   */
  liabilityShift?: LiabilityShiftAuthenticationsThreeDsLiabilityShift;
  /**
   * Indicates the type of authentication method the Issuer will use to challenge the customer.
   * * `STATIC_CHALLENGE`
   * * `DYNAMIC_CHALLENGE`
   * * `OUT_OF_BAND_CHALLENGE`
   * * `DECOUPLED`
   */
  authenticationType?: ChallengeModelAuthenticationsThreeDsChallengeModel;
  /**
   * A CNP Card transaction's 3D Secure Customer Authentication Verification Value that is used to
   * determine and validate the degree of authentication executed for this transaction.
   */
  authenticationValue?: string;
  /**
   * An indication of the degree of the authentication and liability shift obtained for this
   * transaction. It is returned after the 3D Secure process has completed.
   */
  eci?: string;
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
  status?: StatusAuthenticationsThreeDsStatus;
  /**
   * Provides information on why the authentication status field has the specified value based on
   * the response from the 3DS provider.
   * * `CARD_AUTHENTICATION_FAILED`
   * * `UNKNOWN_DEVICE`
   * * `UNSUPPORTED_DEVICE`
   * * `EXCEEDS_AUTHENTICATION_FREQUENCY_LIMIT`
   * * `EXPIRED_CARD`
   * * `INVALID_CARD_NUMBER`
   * * `INVALID_TRANSACTION`
   * * `NO_CARD_RECORD`
   * * `SECURITY_FAILURE`
   * * `STOLEN_CARD`
   * * `SUSPECTED_FRAUD`
   * * `TRANSACTION_NOT_PERMITTED_TO_CARDHOLDER`
   * * `CARDHOLDER_NOT_ENROLLED_IN_SERVICE`
   * * `TRANSACTION_TIMED_OUT_AT_THE_ACS`
   * * `LOW_CONFIDENCE`
   * * `MEDIUM_CONFIDENCE`
   * * `HIGH_CONFIDENCE`
   * * `VERY_HIGH_CONFIDENCE`
   * * `EXCEEDS_ACS_MAXIMUM_CHALLENGES`
   * * `NON_PAYMENT_TRANSACTION_NOT_SUPPORTED`
   * * `THREERI_TRANSACTION_NOT_SUPPORTED`
   * * `ACS_TECHNICAL_ISSUE`
   * * `DECOUPLED_AUTHENTICATION_REQUIRED_BY_ACS`
   * * `DECOUPLED_MAX_EXPIRY_TIME_EXCEEDED`
   * * `INSUFFICIENT_TIME_TO_AUTHENTICATE`
   * * `AUTHENTICATION_ATTEMPTED_BUT_NOT_PERFORMED`
   * * `SCHEME_STATUS_REASON`
   */
  statusReason?: StatusReasonAuthenticationsThreeDsStatusReason;
  /**
   * acs_challenge_redirect_url Should be used instead of the redirect_url -URL to redirect the
   * payer from the merchant's system to the payment method system. This is used to determine or
   * execute a challenge to the payer.
   */
  redirectUrl?: string;
  /** The ACS URL that the payer is redirect to execute a challenge to the payer. */
  acsChallengeRequestUrl?: string;
  /**
   * Indicates the type of channel used to initiate the transaction.
   * * `PAYMENT_TRANSACTION`
   * * `RECURRING_TRANSACTION`
   * * `INSTALMENT_TRANSACTION`
   * * `ADD_CARD`
   * * `MAINTAIN_CARD`
   * * `CARDHOLDER_VERIFICATION`
   */
  authenticationRequestType?: AuthenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestType;
  /**
   * Indicates whether the ACS will utilise Decoupled Authentication to authenticate the Cardholder.
   * * `DECOUPLED_AUTHENTICATION_UTILISED`
   * * `DECOUPLED_AUTHENTICATION_NOT_UTILISED`
   */
  acsDecoupledResponseIndicator?: AcsDecoupledResponseIndicator[];
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
  /**
   * Scheme specific data elements used to to carry additional data. Message extension is sent based
   * on rules set by each scheme and may not always be present in the response.
   */
  messageExtension?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threeDs6Properties: s.Shape<ThreeDs6> = {
  acsTransRef: s.optional(s.string()),
  dsTransRef: s.optional(s.string()),
  serverTransRef: s.optional(s.string()),
  acsReferenceNumber: s.optional(s.string()),
  liabilityShift: s.optional(s.lazy(() => liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema)),
  authenticationType: s.optional(s.lazy(() => challengeModelAuthenticationsThreeDsChallengeModelSchema)),
  authenticationValue: s.optional(s.string()),
  eci: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusAuthenticationsThreeDsStatusSchema)),
  statusReason: s.optional(s.lazy(() => statusReasonAuthenticationsThreeDsStatusReasonSchema)),
  redirectUrl: s.optional(s.string()),
  acsChallengeRequestUrl: s.optional(s.string()),
  authenticationRequestType: s.optional(
    s.lazy(() => authenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestTypeSchema),
  ),
  acsDecoupledResponseIndicator: s.optional(s.array(s.lazy(() => acsDecoupledResponseIndicatorSchema))),
  whitelistStatus: s.optional(s.lazy(() => whitelistStatusAuthenticationsThreeDsWhitelistStatusSchema)),
  messageExtension: s.optional(s.array(s.string())),
  _keysMap: {
    acsTransRef: "acs_trans_ref",
    dsTransRef: "ds_trans_ref",
    serverTransRef: "server_trans_ref",
    acsReferenceNumber: "acs_reference_number",
    liabilityShift: "liability_shift",
    authenticationType: "authentication_type",
    authenticationValue: "authentication_value",
    statusReason: "status_reason",
    redirectUrl: "redirect_url",
    acsChallengeRequestUrl: "acs_challenge_request_url",
    authenticationRequestType: "authentication_request_type",
    acsDecoupledResponseIndicator: "acs_decoupled_response_indicator",
    whitelistStatus: "whitelist_status",
    messageExtension: "message_extension",
  },
};

export const threeDs6InternalSchema: Schema<ThreeDs6> = s.object<ThreeDs6>(threeDs6Properties, {
  additionalProperties: s.json(),
});

export const threeDs6Schema: Schema<ThreeDs6> = s.lazySchema(() =>
  s.object<ThreeDs6>(
    {
      ...threeDs6Properties,
      acsTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dsTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      serverTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      acsReferenceNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      authenticationValue: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      eci: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      redirectUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
