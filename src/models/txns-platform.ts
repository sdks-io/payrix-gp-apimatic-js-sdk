import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsPlatform = {
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
export type TxnsPlatform = (typeof TxnsPlatform)[keyof typeof TxnsPlatform] | (string & {});

export const txnsPlatformSchema: EnumSchema<TxnsPlatform> = s.enumOf<TxnsPlatform>(TxnsPlatform);
