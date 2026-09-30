import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform used to process this resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `APPLE` - **The Apple Payment Processor.**
 * - `ELAVON` - **The Elavon processor.**
 * - `FIRSTDATA` - **The FirstData processor.**
 * - `GOOGLE` - **The Google Payment Processor.**
 * - `VANTIV` - **The WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 * - `VCORE` - **The WorldPay (aka Vantiv) Core processor.**
 * - `TDBANKCA` - **External funding with TD Bank Canada via the Operating Account.**
 * - `WELLSACH` - **The Wells Fargo ACH processor.**
 * - `WELLSFARGO` - **The Wells Fargo Merchant Services processor.**
 * - `WFSINGLE` - **The WFSINGLE processor.**
 * - `WORLDPAY` - **The WORLDPAY processor.**
 *
 * </details>
 */
export const PlatformModel1 = {
  Apple: "APPLE",
  Elavon: "ELAVON",
  Firstdata: "FIRSTDATA",
  Google: "GOOGLE",
  Vantiv: "VANTIV",
  Vcore: "VCORE",
  Tdbankca: "TDBANKCA",
  Wellsach: "WELLSACH",
  Wellsfargo: "WELLSFARGO",
  Wfsingle: "WFSINGLE",
  Worldpay: "WORLDPAY",
} as const;
export type PlatformModel1 = (typeof PlatformModel1)[keyof typeof PlatformModel1] | (string & {});

export const platformModel1Schema: EnumSchema<PlatformModel1> = s.enumOf<PlatformModel1>(PlatformModel1);
