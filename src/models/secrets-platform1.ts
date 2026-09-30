import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform used to process this Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `APPLE` - **Apple Payment Processor**
 * - `ELAVON` - **ELAVON Payment Processor**
 * - `FIRSTDATA` - **FirstData Payment Processor**
 * - `GOOGLE` - **Google Payment Processor**
 * - `VANTIV` - **WorldPay / Vantiv eComm Payment Processor (VAP)**
 * - `VCORE` - **WorldPay / Vantiv Core Payment Processor**
 * - `WELLSACH` - **Wells Fargo Merchant Services Payment Processor (ACH)**
 * - `WELLSFARGO` - **Wells Fargo Merchant Services Payment Processor**
 * - `WFSINGLE` - **Wells Fargo Single Payment Processor**
 * - `WORLDPAY` - **WORLDPAY**
 * - `TDBANKCA` - **TDBANKCA** </details>
 */
export const SecretsPlatform1 = {
  Apple: "APPLE",
  Elavon: "ELAVON",
  Firstdata: "FIRSTDATA",
  Google: "GOOGLE",
  Vantiv: "VANTIV",
  Vcore: "VCORE",
  Wellsach: "WELLSACH",
  Wellsfargo: "WELLSFARGO",
  Wfsingle: "WFSINGLE",
  Worldpay: "WORLDPAY",
  Tdbankca: "TDBANKCA",
} as const;
export type SecretsPlatform1 = (typeof SecretsPlatform1)[keyof typeof SecretsPlatform1] | (string & {});

export const secretsPlatform1Schema: EnumSchema<SecretsPlatform1> =
  s.enumOf<SecretsPlatform1>(SecretsPlatform1);
