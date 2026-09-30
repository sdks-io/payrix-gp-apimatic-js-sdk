import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsSaqType = {
  SaqA: "SAQ-A",
  SaqAEp: "SAQ-A-EP",
  SaqB: "SAQ-B",
  SaqBIp: "SAQ-B-IP",
  SaqCVt: "SAQ-C-VT",
  SaqC: "SAQ-C",
  SaqP2PeHw: "SAQ-P2PE-HW",
  SaqD: "SAQ-D",
} as const;
export type MerchantsSaqType = (typeof MerchantsSaqType)[keyof typeof MerchantsSaqType] | (string & {});

export const merchantsSaqTypeSchema: EnumSchema<MerchantsSaqType> =
  s.enumOf<MerchantsSaqType>(MerchantsSaqType);
