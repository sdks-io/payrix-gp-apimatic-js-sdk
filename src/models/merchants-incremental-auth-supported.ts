import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsIncrementalAuthSupported = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsIncrementalAuthSupported =
  | (typeof MerchantsIncrementalAuthSupported)[keyof typeof MerchantsIncrementalAuthSupported]
  | (number & {});

export const merchantsIncrementalAuthSupportedSchema: EnumSchema<MerchantsIncrementalAuthSupported> =
  s.enumOf<MerchantsIncrementalAuthSupported>(MerchantsIncrementalAuthSupported);
