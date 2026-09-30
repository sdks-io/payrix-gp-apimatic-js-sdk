import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsNaics = {
  _11: "11",
  _21: "21",
  _22: "22",
  _23: "23",
  _3133: "31-33",
  _41: "41",
  _4445: "44-45",
  _4849: "48-49",
  _51: "51",
  _52: "52",
  _53: "53",
  _54: "54",
  _55: "55",
  _56: "56",
  _61: "61",
  _62: "62",
  _71: "71",
  _72: "72",
  _81: "81",
  _9192: "91/92",
} as const;
export type MerchantsNaics = (typeof MerchantsNaics)[keyof typeof MerchantsNaics] | (string & {});

export const merchantsNaicsSchema: EnumSchema<MerchantsNaics> = s.enumOf<MerchantsNaics>(MerchantsNaics);
