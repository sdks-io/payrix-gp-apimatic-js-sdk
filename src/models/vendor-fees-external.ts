import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VendorFeesExternal = {
  _0: 0,
  _1: 1,
} as const;
export type VendorFeesExternal = (typeof VendorFeesExternal)[keyof typeof VendorFeesExternal] | (number & {});

export const vendorFeesExternalSchema: EnumSchema<VendorFeesExternal> =
  s.enumOf<VendorFeesExternal>(VendorFeesExternal);
