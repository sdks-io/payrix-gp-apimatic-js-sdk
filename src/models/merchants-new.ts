import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsNew = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsNew = (typeof MerchantsNew)[keyof typeof MerchantsNew] | (number & {});

export const merchantsNewSchema: EnumSchema<MerchantsNew> = s.enumOf<MerchantsNew>(MerchantsNew);
