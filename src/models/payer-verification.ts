import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayerVerification = {
  NotVerified: "NOT_VERIFIED",
  Pinpad: "PINPAD",
  ElectronicSignatureAnalysis: "ELECTRONIC_SIGNATURE_ANALYSIS",
  ManualSignatureAnalysis: "MANUAL_SIGNATURE_ANALYSIS",
  ManualOther: "MANUAL_OTHER",
  Unknown: "UNKNOWN",
  SystematicOther: "SYSTEMATIC_OTHER",
} as const;
export type PayerVerification = (typeof PayerVerification)[keyof typeof PayerVerification] | (string & {});

export const payerVerificationSchema: EnumSchema<PayerVerification> =
  s.enumOf<PayerVerification>(PayerVerification);
