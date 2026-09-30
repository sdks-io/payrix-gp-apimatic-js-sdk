import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The integration associated with this configuration resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `ACH` - **ACH integration.**
 * - `APPLE` - **APPLE integration.**
 * - `ELAVON` - **ELAVON integration.**
 * - `FEDACH` - **FEDACH integration.**
 * - `FIRSTDATA` - **FIRSTDATA integration.**
 * - `LEGITSCRIPT` - **LEGITSCRIPT integration.**
 * - `NEUTRINO` - **NEUTRINO integration.**
 * - `OFAC` - **OFAC integration.**
 * - `OMNITOKEN` - **OMNITOKEN integration.**
 * - `PAYRIX` - **PAYRIX integration.**
 * - `PLAID` - **PLAID integration.**
 * - `PUSHY` - **PUSHY integration.**
 * - `SAFERPAYMENT` - **SAFERPAYMENT integration.**
 * - `SIFT` - **SIFT integration.**
 * - `SOCURE` - **SOCURE integration.**
 * - `SOUNDPAYMENTS` - **SOUNDPAYMENTS integration.**
 * - `TDBANK` - **TDBANK integration.**
 * - `TDBANKCA` - **TDBANKCA integration.**
 * - `VANTIV` - **VANTIV integration.**
 * - `VCORE` - **VCORE integration.**
 * - `WEBSHIELD` - **WEBSHIELD integration.**
 * - `WELLSACH` - **WELLSACH integration.**
 * - `WELLSFARGO` - **WELLSFARGO integration.**
 * - `WFSINGLE` - **WFSINGLE integration.**
 * - `WORLDPAY` - **WORLDPAY integration.**
 *
 * </details>
 */
export const ConfigurationIntegration1 = {
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
export type ConfigurationIntegration1 =
  | (typeof ConfigurationIntegration1)[keyof typeof ConfigurationIntegration1]
  | (string & {});

export const configurationIntegration1Schema: EnumSchema<ConfigurationIntegration1> =
  s.enumOf<ConfigurationIntegration1>(ConfigurationIntegration1);
