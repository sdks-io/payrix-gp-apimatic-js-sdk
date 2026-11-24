import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayerVerificationsVerificationsDeviceCapabilitiesPayerVerification = {
  None: "NONE",
  Pinpad: "PINPAD",
  SignatureAnalysis: "SIGNATURE_ANALYSIS",
  NoSingatureAnalysis: "NO_SINGATURE_ANALYSIS",
  PayerDevice: "PAYER_DEVICE",
  ContactlessSignature: "CONTACTLESS_SIGNATURE",
  Other: "OTHER",
  Unknown: "UNKNOWN",
} as const;
export type PayerVerificationsVerificationsDeviceCapabilitiesPayerVerification =
  | (typeof PayerVerificationsVerificationsDeviceCapabilitiesPayerVerification)[keyof typeof PayerVerificationsVerificationsDeviceCapabilitiesPayerVerification]
  | (string & {});

export const payerVerificationsVerificationsDeviceCapabilitiesPayerVerificationSchema: EnumSchema<PayerVerificationsVerificationsDeviceCapabilitiesPayerVerification> =
  s.enumOf<PayerVerificationsVerificationsDeviceCapabilitiesPayerVerification>(
    PayerVerificationsVerificationsDeviceCapabilitiesPayerVerification,
  );
