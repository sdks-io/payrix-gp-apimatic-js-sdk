import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsPassTokenEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsPassTokenEnabled =
  | (typeof MerchantsPassTokenEnabled)[keyof typeof MerchantsPassTokenEnabled]
  | (number & {});

export const merchantsPassTokenEnabledSchema: EnumSchema<MerchantsPassTokenEnabled> =
  s.enumOf<MerchantsPassTokenEnabled>(MerchantsPassTokenEnabled);
