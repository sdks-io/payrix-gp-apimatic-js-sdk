import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acsInfoIndicatorSchema, type AcsInfoIndicator } from "./acs-info-indicator.js";
import {
  challengeModelAuthenticationsThreeDsChallengeModelSchema,
  type ChallengeModelAuthenticationsThreeDsChallengeModel,
} from "./challenge-model-authentications-three-ds-challenge-model.js";
import {
  enrolledStatusAuthenticationsThreeDsEnrolledStatusSchema,
  type EnrolledStatusAuthenticationsThreeDsEnrolledStatus,
} from "./enrolled-status-authentications-three-ds-enrolled-status.js";
import {
  liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema,
  type LiabilityShiftAuthenticationsThreeDsLiabilityShift,
} from "./liability-shift-authentications-three-ds-liability-shift.js";
import {
  messageTypeAuthenticationsThreeDsMessageTypeSchema,
  type MessageTypeAuthenticationsThreeDsMessageType,
} from "./message-type-authentications-three-ds-message-type.js";
import { methodDataSchema, type MethodData } from "./method-data.js";
import {
  sessionDataFieldNameAuthenticationsThreeDsSessionDataFieldNameSchema,
  type SessionDataFieldNameAuthenticationsThreeDsSessionDataFieldName,
} from "./session-data-field-name-authentications-three-ds-session-data-field-name.js";

export type ThreeDs = {
  /**
   * The reference created by the 3DSecure provider to identify the specific authentication attempt.
   */
  serverTransRef?: string;
  /** Indicates the version of 3DS. */
  messageVersion?: string;
  /** The version range supported by the Directory Server (Card Scheme). */
  dsProtocolVersionStart?: string;
  /** The version range supported by the Directory Server (Card Scheme). */
  dsProtocolVersionEnd?: string;
  /** The version range supported by the Access Control Server (Issuer). */
  acsProtocolVersionStart?: string;
  /** The version range supported by the Directory Server (Card Scheme). */
  acsProtocolVersionEnd?: string;
  /**
   * Identifies the 3D Secure 2 features that the ACS supports, for example, Whitelisting or
   * Decoupled Authentication.
   * * `NOT_AVAILABLE`
   * * `AUTHENTICATION_AVAILABLE_AT_ACS`
   * * `ATTEMPTS_SUPPORTED_BY_ACS`
   * * `DECOUPLED_AUTHENTICATION_SUPPORTED`
   * * `WHITELISTING_SUPPORTED`
   * * `SCHEME_INFO_INDICATOR_##`
   */
  acsInfoIndicator?: AcsInfoIndicator[];
  /**
   * Indicates if the payer is enrolled for 3DS with this card.
   * * `ENROLLED`
   * * `NOT_ENROLLED`
   * * `NOT_ENROLLED_ATTEMPT`
   * * `UNABLE_TO_VERIFY`
   */
  enrolledStatus?: EnrolledStatusAuthenticationsThreeDsEnrolledStatus;
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
  /**
   * acs_challenge_redirect_url Should be used instead of the redirect_url -URL to redirect the
   * payer from the merchant's system to the payment method system. This is used to determine or
   * execute a challenge to the payer.
   */
  redirectUrl?: string;
  /** The ACS URL that the payer is redirect to execute a challenge to the payer. */
  acsChallengeRequestUrl?: string;
  /**
   * The URL to facilitate the ACS gathering device data. If the ACS does not support this
   * functionality, this field will not be returned. This URL needs to be called from a hidden
   * iframe so that the ACS can gather information about the device being used to authenticate, for
   * example a phone or a browser. The notifications.method_return_url will receive a notification
   * when the 3DS ACS successfully gathers device information and to close the hidden iFrame.
   */
  methodUrl?: string;
  methodData?: MethodData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threeDsProperties: s.Shape<ThreeDs> = {
  serverTransRef: s.optional(s.string()),
  messageVersion: s.optional(s.string()),
  dsProtocolVersionStart: s.optional(s.string()),
  dsProtocolVersionEnd: s.optional(s.string()),
  acsProtocolVersionStart: s.optional(s.string()),
  acsProtocolVersionEnd: s.optional(s.string()),
  acsInfoIndicator: s.optional(s.array(s.lazy(() => acsInfoIndicatorSchema))),
  enrolledStatus: s.optional(s.lazy(() => enrolledStatusAuthenticationsThreeDsEnrolledStatusSchema)),
  eci: s.optional(s.string()),
  liabilityShift: s.optional(s.lazy(() => liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema)),
  challengeModel: s.optional(s.lazy(() => challengeModelAuthenticationsThreeDsChallengeModelSchema)),
  sessionDataFieldName: s.optional(
    s.lazy(() => sessionDataFieldNameAuthenticationsThreeDsSessionDataFieldNameSchema),
  ),
  messageType: s.optional(s.lazy(() => messageTypeAuthenticationsThreeDsMessageTypeSchema)),
  challengeValue: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  acsChallengeRequestUrl: s.optional(s.string()),
  methodUrl: s.optional(s.string()),
  methodData: s.optional(s.lazy(() => methodDataSchema)),
  _keysMap: {
    serverTransRef: "server_trans_ref",
    messageVersion: "message_version",
    dsProtocolVersionStart: "ds_protocol_version_start",
    dsProtocolVersionEnd: "ds_protocol_version_end",
    acsProtocolVersionStart: "acs_protocol_version_start",
    acsProtocolVersionEnd: "acs_protocol_version_end",
    acsInfoIndicator: "acs_info_indicator",
    enrolledStatus: "enrolled_status",
    liabilityShift: "liability_shift",
    challengeModel: "challenge_model",
    sessionDataFieldName: "session_data_field_name",
    messageType: "message_type",
    challengeValue: "challenge_value",
    redirectUrl: "redirect_url",
    acsChallengeRequestUrl: "acs_challenge_request_url",
    methodUrl: "method_url",
    methodData: "method_data",
  },
};

export const threeDsInternalSchema: Schema<ThreeDs> = s.object<ThreeDs>(threeDsProperties, {
  additionalProperties: s.json(),
});

export const threeDsSchema: Schema<ThreeDs> = s.lazySchema(() =>
  s.object<ThreeDs>(
    {
      ...threeDsProperties,
      serverTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dsProtocolVersionStart: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dsProtocolVersionEnd: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      acsProtocolVersionStart: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      acsProtocolVersionEnd: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      eci: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      challengeValue: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      redirectUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
