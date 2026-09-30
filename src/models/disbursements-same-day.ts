import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisbursementsSameDay = {
  _0: 0,
  _1: 1,
} as const;
export type DisbursementsSameDay =
  | (typeof DisbursementsSameDay)[keyof typeof DisbursementsSameDay]
  | (number & {});

export const disbursementsSameDaySchema: EnumSchema<DisbursementsSameDay> =
  s.enumOf<DisbursementsSameDay>(DisbursementsSameDay);
