import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the merchant auto-boarded.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Auto-Boarded**
 * - `1` - **Auto-Boarded**
 *
 * </details>
 */
export const MerchantAutoBoarded1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantAutoBoarded1 =
  | (typeof MerchantAutoBoarded1)[keyof typeof MerchantAutoBoarded1]
  | (number & {});

export const merchantAutoBoarded1Schema: EnumSchema<MerchantAutoBoarded1> =
  s.enumOf<MerchantAutoBoarded1>(MerchantAutoBoarded1);
