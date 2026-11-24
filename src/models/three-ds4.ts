import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  authenticationSourceAuthenticationThreeDsAuthenticationSource3Schema,
  type AuthenticationSourceAuthenticationThreeDsAuthenticationSource3,
} from "./authentication-source-authentication-three-ds-authentication-source3.js";
import {
  challengeModelAuthenticationsThreeDsChallengeModelSchema,
  type ChallengeModelAuthenticationsThreeDsChallengeModel,
} from "./challenge-model-authentications-three-ds-challenge-model.js";
import {
  challengeStatusAuthenticationsThreeDsChallengeStatusSchema,
  type ChallengeStatusAuthenticationsThreeDsChallengeStatus,
} from "./challenge-status-authentications-three-ds-challenge-status.js";
import {
  exemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResultSchema,
  type ExemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResult,
} from "./exemption-optimization-result-authentications-three-ds-exemption-optimization-result.js";
import {
  liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema,
  type LiabilityShiftAuthenticationsThreeDsLiabilityShift,
} from "./liability-shift-authentications-three-ds-liability-shift.js";
import {
  messageCategoryAuthenticationsThreeDsMessageCategorySchema,
  type MessageCategoryAuthenticationsThreeDsMessageCategory,
} from "./message-category-authentications-three-ds-message-category.js";
import {
  messageTypeAuthenticationsThreeDsMessageTypeSchema,
  type MessageTypeAuthenticationsThreeDsMessageType,
} from "./message-type-authentications-three-ds-message-type.js";
import { mobileData1Schema, type MobileData1 } from "./mobile-data1.js";
import {
  sessionDataFieldNameAuthenticationsThreeDsSessionDataFieldNameSchema,
  type SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName,
} from "./session-data-field-name-authentications-three-ds-session-data-field-name.js";
import {
  statusAuthenticationsThreeDsStatusSchema,
  type StatusAuthenticationsThreeDsStatus,
} from "./status-authentications-three-ds-status.js";
import {
  statusReasonAuthenticationsThreeDsStatusReasonSchema,
  type StatusReasonAuthenticationsThreeDsStatusReason,
} from "./status-reason-authentications-three-ds-status-reason.js";

export type ThreeDs4 = {
  /**
   * The reference created by the 3DSecure provider to identify the specific authentication attempt.
   */
  serverTransRef?: string;
  /** Unique transaction identifier assigned by the ACS. */
  acsTransRef?: string;
  /** Certification reference Number assigned by the ACS. */
  acsReferenceNumber?: string;
  /**
   * The reference created by the 3DSecure Directory Server to identify the specific authentication
   * attempt.
   */
  dsTransRef?: string;
  /**
   * An indication of the degree of the authentication and liability shift obtained for this
   * transaction. It is returned after the 3D Secure process has completed.
   */
  eci?: string;
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
  /** Indicates the type of channel used to initiate the transaction. */
  authenticationSource?: AuthenticationSourceAuthenticationThreeDsAuthenticationSource3;
  /** Indicates the version of 3DS. */
  messageVersion?: string;
  /**
   * A CNP Card transaction's 3D Secure Customer Authentication Verification Value that is used to
   * determine and validate the degree of authentication executed for this transaction.
   */
  authenticationValue?: string;
  /**
   * Optional text provided by the ACS/Issuer to the customer during a frictionless transaction that
   * was not authenticated. For example, a customer care phone number to call.
   */
  cardholderResponseInfo?: string;
  /**
   * Indicates the reason category the authentication was initiated.
   * * `PAYMENT_AUTHENTICATION` - The authentication relates to a payment.
   * * `NON_PAYMENT_AUTHENTICATION` - non payment activity such as adding or maintaining cards or
   *   card verification (OTB).
   */
  messageCategory?: MessageCategoryAuthenticationsThreeDsMessageCategory;
  /**
   * acs_challenge_redirect_url Should be used instead of the redirect_url -URL to redirect the
   * payer from the merchant's system to the payment method system. This is used to determine or
   * execute a challenge to the payer.
   */
  redirectUrl?: string;
  /** The ACS URL that the payer is redirect to execute a challenge to the payer. */
  acsChallengeRequestUrl?: string;
  /**
   * Indicates whether a challenge is required due to local/regional mandates or another variable.
   * * `MANDATED`
   * * `NOT_MANDATED`
   * * `UNKNOWN`
   */
  challengeStatus?: ChallengeStatusAuthenticationsThreeDsChallengeStatus;
  /**
   * Indicates the type of authentication method the Issuer will use to challenge the customer.
   * * `STATIC_CHALLENGE`
   * * `DYNAMIC_CHALLENGE`
   * * `OUT_OF_BAND_CHALLENGE`
   * * `DECOUPLED`
   */
  challengeModel?: ChallengeModelAuthenticationsThreeDsChallengeModel;
  /**
   * Indicates the field name to populate data with when redirecting to the 3DS ACS. The data will
   * be returned by the ACS in the same field name when redirecting back to the notification
   * challenge result URL.
   * * MD - Use this field name in the redirect to the ACS 3DS 1.
   * * threeDSSessionData - Use this field name in the redirect to the ACS for 3DS 2.
   */
  sessionDataFieldName?: SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName;
  /**
   * Indicates what is the authentication value format used.
   * * `PAREQ`
   * * `CREQ`
   */
  messageType?: MessageTypeAuthenticationsThreeDsMessageType;
  /**
   * The value to be submitted in the request to the redirect_url when challenging an
   * authentication. It is Base64url encoded and must be sent to the ACS.
   */
  challengeValue?: string;
  /** The result from the transaction risk analysis */
  exemptionOptimizationResult?: ExemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResult;
  mobileData?: MobileData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threeDs4Properties: s.Shape<ThreeDs4> = {
  serverTransRef: s.optional(s.string()),
  acsTransRef: s.optional(s.string()),
  acsReferenceNumber: s.optional(s.string()),
  dsTransRef: s.optional(s.string()),
  eci: s.optional(s.string()),
  liabilityShift: s.optional(s.lazy(() => liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema)),
  status: s.optional(s.lazy(() => statusAuthenticationsThreeDsStatusSchema)),
  statusReason: s.optional(s.lazy(() => statusReasonAuthenticationsThreeDsStatusReasonSchema)),
  authenticationSource: s.optional(
    s.lazy(() => authenticationSourceAuthenticationThreeDsAuthenticationSource3Schema),
  ),
  messageVersion: s.optional(s.string()),
  authenticationValue: s.optional(s.string()),
  cardholderResponseInfo: s.optional(s.string()),
  messageCategory: s.optional(s.lazy(() => messageCategoryAuthenticationsThreeDsMessageCategorySchema)),
  redirectUrl: s.optional(s.string()),
  acsChallengeRequestUrl: s.optional(s.string()),
  challengeStatus: s.optional(s.lazy(() => challengeStatusAuthenticationsThreeDsChallengeStatusSchema)),
  challengeModel: s.optional(s.lazy(() => challengeModelAuthenticationsThreeDsChallengeModelSchema)),
  sessionDataFieldName: s.optional(
    s.lazy(() => sessionDataFieldNameAuthenticationsThreeDsSessionDataFieldNameSchema),
  ),
  messageType: s.optional(s.lazy(() => messageTypeAuthenticationsThreeDsMessageTypeSchema)),
  challengeValue: s.optional(s.string()),
  exemptionOptimizationResult: s.optional(
    s.lazy(() => exemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResultSchema),
  ),
  mobileData: s.optional(s.lazy(() => mobileData1Schema)),
  _keysMap: {
    serverTransRef: "server_trans_ref",
    acsTransRef: "acs_trans_ref",
    acsReferenceNumber: "acs_reference_number",
    dsTransRef: "ds_trans_ref",
    liabilityShift: "liability_shift",
    statusReason: "status_reason",
    authenticationSource: "authentication_source",
    messageVersion: "message_version",
    authenticationValue: "authentication_value",
    cardholderResponseInfo: "cardholder_response_info",
    messageCategory: "message_category",
    redirectUrl: "redirect_url",
    acsChallengeRequestUrl: "acs_challenge_request_url",
    challengeStatus: "challenge_status",
    challengeModel: "challenge_model",
    sessionDataFieldName: "session_data_field_name",
    messageType: "message_type",
    challengeValue: "challenge_value",
    exemptionOptimizationResult: "exemption_optimization_result",
    mobileData: "mobile_data",
  },
};

export const threeDs4InternalSchema: Schema<ThreeDs4> = s.object<ThreeDs4>(threeDs4Properties, {
  additionalProperties: s.json(),
});

export const threeDs4Schema: Schema<ThreeDs4> = s.lazySchema(() =>
  s.object<ThreeDs4>(
    {
      ...threeDs4Properties,
      serverTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      acsTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      acsReferenceNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dsTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      eci: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      authenticationValue: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      cardholderResponseInfo: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      redirectUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      challengeValue: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
