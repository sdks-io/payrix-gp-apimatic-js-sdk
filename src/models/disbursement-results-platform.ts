import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisbursementResultsPlatform = {
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
export type DisbursementResultsPlatform =
  | (typeof DisbursementResultsPlatform)[keyof typeof DisbursementResultsPlatform]
  | (string & {});

export const disbursementResultsPlatformSchema: EnumSchema<DisbursementResultsPlatform> =
  s.enumOf<DisbursementResultsPlatform>(DisbursementResultsPlatform);
