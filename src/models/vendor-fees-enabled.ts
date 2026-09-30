import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VendorFeesEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type VendorFeesEnabled = (typeof VendorFeesEnabled)[keyof typeof VendorFeesEnabled] | (number & {});

export const vendorFeesEnabledSchema: EnumSchema<VendorFeesEnabled> =
  s.enumOf<VendorFeesEnabled>(VendorFeesEnabled);
