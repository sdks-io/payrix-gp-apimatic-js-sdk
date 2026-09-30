import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityPlatform = {
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
export type EntityPlatform = (typeof EntityPlatform)[keyof typeof EntityPlatform] | (string & {});

export const entityPlatformSchema: EnumSchema<EntityPlatform> = s.enumOf<EntityPlatform>(EntityPlatform);
