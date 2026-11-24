import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayerVerificationsTransactionsDevicePayerVerification = {
  NotVerified: "NOT_VERIFIED",
  Pinpad: "PINPAD",
  ElectronicSignatureAnalysis: "ELECTRONIC_SIGNATURE_ANALYSIS",
  ManualSignatureAnalysis: "MANUAL_SIGNATURE_ANALYSIS",
  ManualOther: "MANUAL_OTHER",
  Unknown: "UNKNOWN",
  SystematicOther: "SYSTEMATIC_OTHER",
} as const;
export type PayerVerificationsTransactionsDevicePayerVerification =
  | (typeof PayerVerificationsTransactionsDevicePayerVerification)[keyof typeof PayerVerificationsTransactionsDevicePayerVerification]
  | (string & {});

export const payerVerificationsTransactionsDevicePayerVerificationSchema: EnumSchema<PayerVerificationsTransactionsDevicePayerVerification> =
  s.enumOf<PayerVerificationsTransactionsDevicePayerVerification>(
    PayerVerificationsTransactionsDevicePayerVerification,
  );
