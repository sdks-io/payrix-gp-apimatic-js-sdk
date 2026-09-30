import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The payment platform integration using credential logins.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `APPLE` - **Apple API**
 *
 * - `ELAVON` - **Elavon API**
 *
 * - `FEDACH` - **FedACH Account Integration**
 *
 * - `FIRSTDATA` - **FirstData / Clover Integration**
 *
 * - `NEUTRINO` - **Neutrino eCommerce Integration**
 *
 * - `OFAC` - **Office of Foreign Assets Control Sanctions**
 *
 * - `PAYRIX` - **Payrix API**
 *
 * - `PLAID` - **Plaid Account Integration**
 *
 * - `SIFT` - **Sift Fraud Management**
 *
 * - `SOCURE` - **Socure ID Verification**
 *
 * - `SOUNDPAYMENTS` - **Sound Payments POS**
 *
 * - `TDBANK` - **TD Bank Platform**
 *
 * - `VANTIV` - **WorldPay / Vantiv eComm Platform**
 *
 * - `VCORE` - **WorldPay / Vantiv Core Platform**
 *
 * - `WEBSHIELD` - **Web Shield Merchant Monitoring**
 *
 * - `WELLSACH` - **Wells Fargo Merchant Services ACH Processor.**
 *
 * - `WELLSFARGO` - **Wells Fargo Merchant Services Payment Processor**
 *
 * - `WFSINGLE` - **Wells Fargo Single Payment Processors**
 *
 * </details>
 */
export const CredentialIntegration1 = {
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
export type CredentialIntegration1 =
  | (typeof CredentialIntegration1)[keyof typeof CredentialIntegration1]
  | (string & {});

export const credentialIntegration1Schema: EnumSchema<CredentialIntegration1> =
  s.enumOf<CredentialIntegration1>(CredentialIntegration1);
