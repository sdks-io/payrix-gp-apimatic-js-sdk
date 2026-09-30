import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform that issued this terminalRef.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `ELAVON` - **ELAVON Payments Platform.**
 * - `FIRSTDATA` - **FirstData Payments Platform.**
 * - `VCORE` - **WorldPay / Vantiv Core Payments Platform.**
 * - `VANTIV` - **WorldPay / Vantiv eComm Payments (VAP) Platform.**
 * - `WELLSFARGO` - **Wells Fargo Merchant Services Payments Platform.**
 * - `SOUNDPAYMENTS` - **SoundPayments EMV and POS Payments Platform.**
 * - `PAYRIX` - **Payrix Merchant Payments Platform.**
 *
 * </details>
 */
export const TerminalRefPlatform2 = {
  Elavon: "ELAVON",
  Firstdata: "FIRSTDATA",
  Vcore: "VCORE",
  Vantiv: "VANTIV",
  Wellsfargo: "WELLSFARGO",
  Soundpayments: "SOUNDPAYMENTS",
  Payrix: "PAYRIX",
} as const;
export type TerminalRefPlatform2 =
  | (typeof TerminalRefPlatform2)[keyof typeof TerminalRefPlatform2]
  | (string & {});

export const terminalRefPlatform2Schema: EnumSchema<TerminalRefPlatform2> =
  s.enumOf<TerminalRefPlatform2>(TerminalRefPlatform2);
