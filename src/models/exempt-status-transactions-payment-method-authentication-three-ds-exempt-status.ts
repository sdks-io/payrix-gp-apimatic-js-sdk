import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if any exemptions apply to this transaction. */
export const ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus = {
  LowValue: "LOW_VALUE",
  TransactionRiskAnalysis: "TRANSACTION_RISK_ANALYSIS",
  TrustedMerchant: "TRUSTED_MERCHANT",
  SecureCorporatePayment: "SECURE_CORPORATE_PAYMENT",
  ScaDelegation: "SCA_DELEGATION",
} as const;
export type ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus =
  | (typeof ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus)[keyof typeof ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus]
  | (string & {});

export const exemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatusSchema: EnumSchema<ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus> =
  s.enumOf<ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus>(
    ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus,
  );
