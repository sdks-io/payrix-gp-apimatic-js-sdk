import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CredentialIntegration = {
  Apple: "APPLE",
  Elavon: "ELAVON",
  Fedach: "FEDACH",
  Firstdata: "FIRSTDATA",
  Neutrino: "NEUTRINO",
  Ofac: "OFAC",
  Payrix: "PAYRIX",
  Plaid: "PLAID",
  Sift: "SIFT",
  Socure: "SOCURE",
  Soundpayments: "SOUNDPAYMENTS",
  Tdbank: "TDBANK",
  Vantiv: "VANTIV",
  Vcore: "VCORE",
  Webshield: "WEBSHIELD",
  Wellsach: "WELLSACH",
  Wellsfargo: "WELLSFARGO",
  Wfsingle: "WFSINGLE",
} as const;
export type CredentialIntegration =
  | (typeof CredentialIntegration)[keyof typeof CredentialIntegration]
  | (string & {});

export const credentialIntegrationSchema: EnumSchema<CredentialIntegration> =
  s.enumOf<CredentialIntegration>(CredentialIntegration);
