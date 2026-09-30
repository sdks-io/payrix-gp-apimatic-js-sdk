import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FundingParameterPlatform = {
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
export type FundingParameterPlatform =
  | (typeof FundingParameterPlatform)[keyof typeof FundingParameterPlatform]
  | (string & {});

export const fundingParameterPlatformSchema: EnumSchema<FundingParameterPlatform> =
  s.enumOf<FundingParameterPlatform>(FundingParameterPlatform);
