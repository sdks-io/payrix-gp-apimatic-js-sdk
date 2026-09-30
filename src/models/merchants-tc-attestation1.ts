import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not the merchant has acknowledged and accepted the Terms and Conditions.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Accepted**
 * - `1` - **Accepted**
 *
 * </details>
 */
export const MerchantsTcAttestation1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsTcAttestation1 =
  | (typeof MerchantsTcAttestation1)[keyof typeof MerchantsTcAttestation1]
  | (number & {});

export const merchantsTcAttestation1Schema: EnumSchema<MerchantsTcAttestation1> =
  s.enumOf<MerchantsTcAttestation1>(MerchantsTcAttestation1);
