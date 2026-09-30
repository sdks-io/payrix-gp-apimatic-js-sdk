import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform used to process this Disbursement.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `ELAVON` - **The Elavon processor.**
 *
 * - `VANTIV` - **The Worldpay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 * - `VCORE` - **The Worldpay (aka Vantiv) Core processor.**
 *
 * - `TDBANK` - **External funding with TD Bank via the Operating Account.**
 *
 * - `TDBANKCA` - **External funding with TD Bank Canada via the Operating Account.**
 *
 * - `WELLSACH` - **The Wells Fargo ACH processor.**
 *
 * - `WELLSFARGO` - **The Wells Fargo Merchant Services processor.**
 *
 * - `WFSINGLE` - **The WFSINGLE processor.**
 *
 * - `WORLDPAY` - **The WORLDPAY processor.**
 *
 * </details>
 */
export const DisbursementResultsPlatform2 = {
  Elavon: "ELAVON",
  Vantiv: "VANTIV",
  Vcore: "VCORE",
  Tdbank: "TDBANK",
  Tdbankca: "TDBANKCA",
  Wellsach: "WELLSACH",
  Wellsfargo: "WELLSFARGO",
  Wfsingle: "WFSINGLE",
  Worldpay: "WORLDPAY",
} as const;
export type DisbursementResultsPlatform2 =
  | (typeof DisbursementResultsPlatform2)[keyof typeof DisbursementResultsPlatform2]
  | (string & {});

export const disbursementResultsPlatform2Schema: EnumSchema<DisbursementResultsPlatform2> =
  s.enumOf<DisbursementResultsPlatform2>(DisbursementResultsPlatform2);
