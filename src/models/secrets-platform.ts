import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SecretsPlatform = {
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
} as const;
export type SecretsPlatform = (typeof SecretsPlatform)[keyof typeof SecretsPlatform] | (string & {});

export const secretsPlatformSchema: EnumSchema<SecretsPlatform> = s.enumOf<SecretsPlatform>(SecretsPlatform);
