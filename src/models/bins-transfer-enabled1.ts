import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether funds may be “pushed” to this debit card (with push-to-card).
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Push-to-card transfer disabled.**
 * - `1` - **Push-to-card transfer enabled.**
 *
 * </details>
 */
export const BinsTransferEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type BinsTransferEnabled1 =
  | (typeof BinsTransferEnabled1)[keyof typeof BinsTransferEnabled1]
  | (number & {});

export const binsTransferEnabled1Schema: EnumSchema<BinsTransferEnabled1> =
  s.enumOf<BinsTransferEnabled1>(BinsTransferEnabled1);
