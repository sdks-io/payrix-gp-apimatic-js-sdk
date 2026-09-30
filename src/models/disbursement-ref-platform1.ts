import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform used to process this Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `ELAVON` - The Elavon processor.
 *
 * - `VANTIV` - The WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.
 *
 * - `VCORE` - The WorldPay (aka Vantiv) Core processor.
 *
 * - `TDBANK` - External funding with TD Bank via the Operating Account.
 *
 * - `TDBANKCA` - External funding with TD Bank Canada via the Operating Account.
 *
 * - `WELLSACH` - The Wells Fargo ACH processor.
 *
 * - `WELLSFARGO` - The Wells Fargo Merchant Services processor.
 *
 * - `WFSINGLE` - The WFSINGLE processor.
 *
 * - `WORLDPAY` - The WORLDPAY processor.
 *
 * </details>
 */
export const DisbursementRefPlatform1 = {
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
export type DisbursementRefPlatform1 =
  | (typeof DisbursementRefPlatform1)[keyof typeof DisbursementRefPlatform1]
  | (string & {});

export const disbursementRefPlatform1Schema: EnumSchema<DisbursementRefPlatform1> =
  s.enumOf<DisbursementRefPlatform1>(DisbursementRefPlatform1);
