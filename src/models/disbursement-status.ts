import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisbursementStatus = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
} as const;
export type DisbursementStatus = (typeof DisbursementStatus)[keyof typeof DisbursementStatus] | (number & {});

export const disbursementStatusSchema: EnumSchema<DisbursementStatus> =
  s.enumOf<DisbursementStatus>(DisbursementStatus);
