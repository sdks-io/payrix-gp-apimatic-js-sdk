import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field allows the ability to submit merchant registration files with a MasterCard (MC) Auth
 * Integrity value.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Incremental Auth Not Supported**
 * - `1` - **Incremental Auth Supported**
 *
 * </details>
 */
export const MerchantsIncrementalAuthSupported1 = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsIncrementalAuthSupported1 =
  | (typeof MerchantsIncrementalAuthSupported1)[keyof typeof MerchantsIncrementalAuthSupported1]
  | (number & {});

export const merchantsIncrementalAuthSupported1Schema: EnumSchema<MerchantsIncrementalAuthSupported1> =
  s.enumOf<MerchantsIncrementalAuthSupported1>(MerchantsIncrementalAuthSupported1);
