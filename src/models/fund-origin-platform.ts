import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FundOriginPlatform = {
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
export type FundOriginPlatform = (typeof FundOriginPlatform)[keyof typeof FundOriginPlatform] | (string & {});

export const fundOriginPlatformSchema: EnumSchema<FundOriginPlatform> =
  s.enumOf<FundOriginPlatform>(FundOriginPlatform);
