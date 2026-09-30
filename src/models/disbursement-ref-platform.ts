import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisbursementRefPlatform = {
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
export type DisbursementRefPlatform =
  | (typeof DisbursementRefPlatform)[keyof typeof DisbursementRefPlatform]
  | (string & {});

export const disbursementRefPlatformSchema: EnumSchema<DisbursementRefPlatform> =
  s.enumOf<DisbursementRefPlatform>(DisbursementRefPlatform);
