import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConfigurationIntegration = {
  Ach: "ACH",
  Apple: "APPLE",
  Elavon: "ELAVON",
  Fedach: "FEDACH",
  Firstdata: "FIRSTDATA",
  Legitscript: "LEGITSCRIPT",
  Neutrino: "NEUTRINO",
  Ofac: "OFAC",
  Omnitoken: "OMNITOKEN",
  Payrix: "PAYRIX",
  Plaid: "PLAID",
  Pushy: "PUSHY",
  Saferpayment: "SAFERPAYMENT",
  Sift: "SIFT",
  Socure: "SOCURE",
  Soundpayments: "SOUNDPAYMENTS",
  Tdbank: "TDBANK",
  Tdbankca: "TDBANKCA",
  Vantiv: "VANTIV",
  Vcore: "VCORE",
  Webshield: "WEBSHIELD",
  Wellsach: "WELLSACH",
  Wellsfargo: "WELLSFARGO",
  Wfsingle: "WFSINGLE",
  Worldpay: "WORLDPAY",
} as const;
export type ConfigurationIntegration =
  | (typeof ConfigurationIntegration)[keyof typeof ConfigurationIntegration]
  | (string & {});

export const configurationIntegrationSchema: EnumSchema<ConfigurationIntegration> =
  s.enumOf<ConfigurationIntegration>(ConfigurationIntegration);
