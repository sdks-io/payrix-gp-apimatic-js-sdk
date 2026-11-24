import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  challengeStatusAuthenticationsThreeDsChallengeStatusSchema,
  type ChallengeStatusAuthenticationsThreeDsChallengeStatus,
} from "./challenge-status-authentications-three-ds-challenge-status.js";
import {
  liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema,
  type LiabilityShiftAuthenticationsThreeDsLiabilityShift,
} from "./liability-shift-authentications-three-ds-liability-shift.js";
import {
  messageCategoryAuthenticationsThreeDsMessageCategorySchema,
  type MessageCategoryAuthenticationsThreeDsMessageCategory,
} from "./message-category-authentications-three-ds-message-category.js";
import {
  statusAuthenticationsThreeDsStatusSchema,
  type StatusAuthenticationsThreeDsStatus,
} from "./status-authentications-three-ds-status.js";
import {
  statusReasonAuthenticationsThreeDsStatusReasonSchema,
  type StatusReasonAuthenticationsThreeDsStatusReason,
} from "./status-reason-authentications-three-ds-status-reason.js";

export type ThreeDs2 = {
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
   * A CNP Card transaction's 3D Secure Customer Authentication Verification Value that is used to
   * determine and validate the degree of authentication executed for this transaction.
   */
  value?: string;
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
   * Indicates the reason category the authentication was initiated.
   * * `PAYMENT_AUTHENTICATION` - The authentication relates to a payment.
   * * `NON_PAYMENT_AUTHENTICATION` - non payment activity such as adding or maintaining cards or
   *   card verification (OTB).
   */
  messageCategory?: MessageCategoryAuthenticationsThreeDsMessageCategory;
  /** Indicates the version of 3DS. */
  messageVersion?: string;
  /**
   * Indicates whether a challenge is required due to local/regional mandates or another variable.
   * * `MANDATED`
   * * `NOT_MANDATED`
   * * `UNKNOWN`
   */
  challengeStatus?: ChallengeStatusAuthenticationsThreeDsChallengeStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threeDs2Properties: s.Shape<ThreeDs2> = {
  acsTransRef: s.optional(s.string()),
  dsTransRef: s.optional(s.string()),
  serverTransRef: s.optional(s.string()),
  liabilityShift: s.optional(s.lazy(() => liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema)),
  value: s.optional(s.string()),
  eci: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusAuthenticationsThreeDsStatusSchema)),
  statusReason: s.optional(s.lazy(() => statusReasonAuthenticationsThreeDsStatusReasonSchema)),
  messageCategory: s.optional(s.lazy(() => messageCategoryAuthenticationsThreeDsMessageCategorySchema)),
  messageVersion: s.optional(s.string()),
  challengeStatus: s.optional(s.lazy(() => challengeStatusAuthenticationsThreeDsChallengeStatusSchema)),
  _keysMap: {
    acsTransRef: "acs_trans_ref",
    dsTransRef: "ds_trans_ref",
    serverTransRef: "server_trans_ref",
    liabilityShift: "liability_shift",
    statusReason: "status_reason",
    messageCategory: "message_category",
    messageVersion: "message_version",
    challengeStatus: "challenge_status",
  },
};

export const threeDs2InternalSchema: Schema<ThreeDs2> = s.object<ThreeDs2>(threeDs2Properties, {
  additionalProperties: s.json(),
});

export const threeDs2Schema: Schema<ThreeDs2> = s.lazySchema(() =>
  s.object<ThreeDs2>(
    {
      ...threeDs2Properties,
      acsTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dsTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      serverTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      value: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      eci: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
    },
    { additionalProperties: s.json() },
  ),
);
