import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The identifier of the Platform associated with this fundingParameter.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `APPLE` - **The Apple Payment Processor.**
 * - `ELAVON` - **The Elavon processor.**
 * - `FIRSTDATA` - **The First Data processor.**
 * - `GOOGLE` - **The Google Payment Processor.**
 * - `VANTIV` - **The WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 * - `VCORE` - **The WorldPay (aka Vantiv) Core processor.**
 * - `WELLSACH` - **The Wells Fargo ACH processor.**
 * - `WELLSFARGO` - **The Wells Fargo Merchant Services processor.**
 * - `WFSINGLE` - **The WFSINGLE processor.**
 * - `WORLDPAY` - **The WORLDPAY processor.**
 * - `TDBANKCA` - **External funding with TD Bank Canada via the Operating Account.**
 * - `all` - **All Platform Processor.**
 *
 * </details>
 */
export const FundingParameterPlatform2 = {
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
  All: "all",
} as const;
export type FundingParameterPlatform2 =
  | (typeof FundingParameterPlatform2)[keyof typeof FundingParameterPlatform2]
  | (string & {});

export const fundingParameterPlatform2Schema: EnumSchema<FundingParameterPlatform2> =
  s.enumOf<FundingParameterPlatform2>(FundingParameterPlatform2);
