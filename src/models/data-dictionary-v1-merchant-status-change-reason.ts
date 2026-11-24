import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This is the reason or nature of the status.
 *   * ACTIVE - The merchant is in good standing.
 *   * CLOSED_BY_MERCHANT - The merchant has been closed at the request of the merchant or partner.
 *   * CLOSED_BY_RISK - The merchant has been closed by a Global Payments Risk Team.
 *   * APPLICATION_DENIED - The merchant application has been denied by the Global Payments Risk
 *     Team.
 *   * PENDING_REVIEW - The merchant application is pending review from the Global Payments Risk
 *     Team.
 *   * PENDING_MERCHANT_CONSENT - The merchant must agree to terms and conditions prior to accepting
 *     payments.
 *   * PENDING_IDENTITY_VALIDATION - The applicant's identity and/or business documents must be
 *     reviewed by the Global Payments Risk Team.
 *   * PENDING_IDENTITY_VALIDATION_AND_PAYMENT - The applicant's identity and/or business documents
 *     must be reviewed by the Global Payments Risk Team and submit payment.
 *   * PENDING_PAYMENT - The merchant must submit payment.
 *   * UNKNOWN_STATUS - Contact your relationship manager for more details.
 *   * REMOVE_PARTNERSHIP - The partner has requested to disassociate the merchant from the partner
 *     program.
 */
export const DataDictionaryV1MerchantStatusChangeReason = {
  Active: "ACTIVE",
  ClosedByMerchant: "CLOSED_BY_MERCHANT",
  ClosedByRisk: "CLOSED_BY_RISK",
  ApplicationDenied: "APPLICATION_DENIED",
  PendingReview: "PENDING_REVIEW",
  PendingMerchantConsent: "PENDING_MERCHANT_CONSENT",
  PendingIdentityValidation: "PENDING_IDENTITY_VALIDATION",
  PendingIdentityValidationAndPayment: "PENDING_IDENTITY_VALIDATION_AND_PAYMENT",
  PendingPayment: "PENDING_PAYMENT",
  UnknownStatus: "UNKNOWN_STATUS",
} as const;
export type DataDictionaryV1MerchantStatusChangeReason =
  | (typeof DataDictionaryV1MerchantStatusChangeReason)[keyof typeof DataDictionaryV1MerchantStatusChangeReason]
  | (string & {});

export const dataDictionaryV1MerchantStatusChangeReasonSchema: EnumSchema<DataDictionaryV1MerchantStatusChangeReason> =
  s.enumOf<DataDictionaryV1MerchantStatusChangeReason>(DataDictionaryV1MerchantStatusChangeReason);
