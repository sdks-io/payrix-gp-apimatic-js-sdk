import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayerVerificationsTransactionsDeviceCapabilitiesPayerVerification = {
  None: "NONE",
  Pinpad: "PINPAD",
  SignatureAnalysis: "SIGNATURE_ANALYSIS",
  NoSingatureAnalysis: "NO_SINGATURE_ANALYSIS",
  PayerDevice: "PAYER_DEVICE",
  ContactlessSignature: "CONTACTLESS_SIGNATURE",
  Other: "OTHER",
  Unknown: "UNKNOWN",
} as const;
export type PayerVerificationsTransactionsDeviceCapabilitiesPayerVerification =
  | (typeof PayerVerificationsTransactionsDeviceCapabilitiesPayerVerification)[keyof typeof PayerVerificationsTransactionsDeviceCapabilitiesPayerVerification]
  | (string & {});

export const payerVerificationsTransactionsDeviceCapabilitiesPayerVerificationSchema: EnumSchema<PayerVerificationsTransactionsDeviceCapabilitiesPayerVerification> =
  s.enumOf<PayerVerificationsTransactionsDeviceCapabilitiesPayerVerification>(
    PayerVerificationsTransactionsDeviceCapabilitiesPayerVerification,
  );
