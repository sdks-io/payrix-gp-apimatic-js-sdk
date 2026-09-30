import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlatformModel = {
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
export type PlatformModel = (typeof PlatformModel)[keyof typeof PlatformModel] | (string & {});

export const platformModelSchema: EnumSchema<PlatformModel> = s.enumOf<PlatformModel>(PlatformModel);
