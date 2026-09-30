import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackPlatform = {
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
export type ChargebackPlatform = (typeof ChargebackPlatform)[keyof typeof ChargebackPlatform] | (string & {});

export const chargebackPlatformSchema: EnumSchema<ChargebackPlatform> =
  s.enumOf<ChargebackPlatform>(ChargebackPlatform);
