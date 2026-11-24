import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Provides information on why the authentication status field has the specified value based on the
 * response from the 3DS provider.
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
export const StatusReasonAuthenticationsThreeDsStatusReason = {
  CardAuthenticationFailed: "CARD_AUTHENTICATION_FAILED",
  UnknownDevice: "UNKNOWN_DEVICE",
  UnsupportedDevice: "UNSUPPORTED_DEVICE",
  ExceedsAuthenticationFrequencyLimit: "EXCEEDS_AUTHENTICATION_FREQUENCY_LIMIT",
  ExpiredCard: "EXPIRED_CARD",
  InvalidCardNumber: "INVALID_CARD_NUMBER",
  InvalidTransaction: "INVALID_TRANSACTION",
  NoCardRecord: "NO_CARD_RECORD",
  SecurityFailure: "SECURITY_FAILURE",
  StolenCard: "STOLEN_CARD",
  SuspectedFraud: "SUSPECTED_FRAUD",
  TransactionNotPermittedToCardholder: "TRANSACTION_NOT_PERMITTED_TO_CARDHOLDER",
  CardholderNotEnrolledInService: "CARDHOLDER_NOT_ENROLLED_IN_SERVICE",
  TransactionTimedOutAtTheAcs: "TRANSACTION_TIMED_OUT_AT_THE_ACS",
  LowConfidence: "LOW_CONFIDENCE",
  MediumConfidence: "MEDIUM_CONFIDENCE",
  HighConfidence: "HIGH_CONFIDENCE",
  VeryHighConfidence: "VERY_HIGH_CONFIDENCE",
  ExceedsAcsMaximumChallenges: "EXCEEDS_ACS_MAXIMUM_CHALLENGES",
  NonPaymentTransactionNotSupported: "NON_PAYMENT_TRANSACTION_NOT_SUPPORTED",
  ThreeriTransactionNotSupported: "THREERI_TRANSACTION_NOT_SUPPORTED",
  AcsTechnicalIssue: "ACS_TECHNICAL_ISSUE",
  DecoupledAuthenticationRequiredByAcs: "DECOUPLED_AUTHENTICATION_REQUIRED_BY_ACS",
  DecoupledMaxExpiryTimeExceeded: "DECOUPLED_MAX_EXPIRY_TIME_EXCEEDED",
  InsufficientTimeToAuthenticate: "INSUFFICIENT_TIME_TO_AUTHENTICATE",
  AuthenticationAttemptedButNotPerformed: "AUTHENTICATION_ATTEMPTED_BUT_NOT_PERFORMED",
  SchemeStatusReason: "SCHEME_STATUS_REASON",
} as const;
export type StatusReasonAuthenticationsThreeDsStatusReason =
  | (typeof StatusReasonAuthenticationsThreeDsStatusReason)[keyof typeof StatusReasonAuthenticationsThreeDsStatusReason]
  | (string & {});

export const statusReasonAuthenticationsThreeDsStatusReasonSchema: EnumSchema<StatusReasonAuthenticationsThreeDsStatusReason> =
  s.enumOf<StatusReasonAuthenticationsThreeDsStatusReason>(StatusReasonAuthenticationsThreeDsStatusReason);
