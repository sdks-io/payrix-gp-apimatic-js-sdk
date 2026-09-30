import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsLetterStatus = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsLetterStatus =
  | (typeof MerchantsLetterStatus)[keyof typeof MerchantsLetterStatus]
  | (number & {});

export const merchantsLetterStatusSchema: EnumSchema<MerchantsLetterStatus> =
  s.enumOf<MerchantsLetterStatus>(MerchantsLetterStatus);
