import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The platform used for the adjustment. This field is required if the adjustment is not between
 * entities.
 */
export const ChargebackPlatform1 = {
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
export type ChargebackPlatform1 =
  | (typeof ChargebackPlatform1)[keyof typeof ChargebackPlatform1]
  | (string & {});

export const chargebackPlatform1Schema: EnumSchema<ChargebackPlatform1> =
  s.enumOf<ChargebackPlatform1>(ChargebackPlatform1);
