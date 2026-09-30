import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantType = {
  General: "general",
  Internal: "internal",
  Data: "data",
  Legal: "legal",
  Denial: "denial",
  Platform: "platform",
  PlatformNote: "platformNote",
} as const;
export type MerchantType = (typeof MerchantType)[keyof typeof MerchantType] | (string & {});

export const merchantTypeSchema: EnumSchema<MerchantType> = s.enumOf<MerchantType>(MerchantType);
