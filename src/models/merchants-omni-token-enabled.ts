import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsOmniTokenEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsOmniTokenEnabled =
  | (typeof MerchantsOmniTokenEnabled)[keyof typeof MerchantsOmniTokenEnabled]
  | (number & {});

export const merchantsOmniTokenEnabledSchema: EnumSchema<MerchantsOmniTokenEnabled> =
  s.enumOf<MerchantsOmniTokenEnabled>(MerchantsOmniTokenEnabled);
