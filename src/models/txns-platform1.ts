import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform used to process transactions.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `APPLE` - **The Apple Payment Processor (Deprecated).**
 * - `ELAVON` - **The Elavon processor (Deprecated).**
 * - `FIRSTDATA` - **The FirstData processor (Deprecated).**
 * - `GOOGLE` - **The Google Payment Processor (Deprecated).**
 * - `VANTIV` - **The WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 * - `VCORE` - **The WorldPay (aka Vantiv) Core processor.**
 * - `WELLSACH` - **The Wells Fargo ACH processor.**
 * - `WELLSFARGO` - **The Wells Fargo Merchant Services processor (Deprecated).**
 * - `WFSINGLE` - **The WFSINGLE processor (Deprecated).**
 *
 * </details>
 */
export const TxnsPlatform1 = {
  Apple: "APPLE",
  Elavon: "ELAVON",
  Firstdata: "FIRSTDATA",
  Google: "GOOGLE",
  Vantiv: "VANTIV",
  Vcore: "VCORE",
  Wellsach: "WELLSACH",
  Wellsfargo: "WELLSFARGO",
  Wfsingle: "WFSINGLE",
} as const;
export type TxnsPlatform1 = (typeof TxnsPlatform1)[keyof typeof TxnsPlatform1] | (string & {});

export const txnsPlatform1Schema: EnumSchema<TxnsPlatform1> = s.enumOf<TxnsPlatform1>(TxnsPlatform1);
