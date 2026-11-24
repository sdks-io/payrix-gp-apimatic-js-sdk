import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayerVerification1 = {
  None: "NONE",
  Pinpad: "PINPAD",
  SignatureAnalysis: "SIGNATURE_ANALYSIS",
  NoSingatureAnalysis: "NO_SINGATURE_ANALYSIS",
  PayerDevice: "PAYER_DEVICE",
  ContactlessSignature: "CONTACTLESS_SIGNATURE",
  Other: "OTHER",
  Unknown: "UNKNOWN",
} as const;
export type PayerVerification1 = (typeof PayerVerification1)[keyof typeof PayerVerification1] | (string & {});

export const payerVerification1Schema: EnumSchema<PayerVerification1> =
  s.enumOf<PayerVerification1>(PayerVerification1);
