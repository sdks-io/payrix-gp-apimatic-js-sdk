import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if any exemptions apply to this transaction. */
export const ExemptStatusVerificationsPaymentMethodAuthenticationThreeDsExemptStatus = {
  LowValue: "LOW_VALUE",
  TransactionRiskAnalysis: "TRANSACTION_RISK_ANALYSIS",
  TrustedMerchant: "TRUSTED_MERCHANT",
  SecureCorporatePayment: "SECURE_CORPORATE_PAYMENT",
  ScaDelegation: "SCA_DELEGATION",
} as const;
export type ExemptStatusVerificationsPaymentMethodAuthenticationThreeDsExemptStatus =
  | (typeof ExemptStatusVerificationsPaymentMethodAuthenticationThreeDsExemptStatus)[keyof typeof ExemptStatusVerificationsPaymentMethodAuthenticationThreeDsExemptStatus]
  | (string & {});

export const exemptStatusVerificationsPaymentMethodAuthenticationThreeDsExemptStatusSchema: EnumSchema<ExemptStatusVerificationsPaymentMethodAuthenticationThreeDsExemptStatus> =
  s.enumOf<ExemptStatusVerificationsPaymentMethodAuthenticationThreeDsExemptStatus>(
    ExemptStatusVerificationsPaymentMethodAuthenticationThreeDsExemptStatus,
  );
