import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RefundReleaseReserve = {
  _0: 0,
  _1: 1,
} as const;
export type RefundReleaseReserve =
  | (typeof RefundReleaseReserve)[keyof typeof RefundReleaseReserve]
  | (number & {});

export const refundReleaseReserveSchema: EnumSchema<RefundReleaseReserve> =
  s.enumOf<RefundReleaseReserve>(RefundReleaseReserve);
