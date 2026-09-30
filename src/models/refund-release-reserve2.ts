import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether a refund Transaction should cause any reserved funds in the related Transaction to be
 * released.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **False**
 * - `1` - **True**
 *
 * </details>
 */
export const RefundReleaseReserve2 = {
  _0: 0,
  _1: 1,
} as const;
export type RefundReleaseReserve2 =
  | (typeof RefundReleaseReserve2)[keyof typeof RefundReleaseReserve2]
  | (number & {});

export const refundReleaseReserve2Schema: EnumSchema<RefundReleaseReserve2> =
  s.enumOf<RefundReleaseReserve2>(RefundReleaseReserve2);
