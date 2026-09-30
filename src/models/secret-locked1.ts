import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this secret is locked or not. If it is locked, then the value of this type of secret will
 * prevail.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not Locked**
 * - `1` - **Locked**
 *
 * </details>
 */
export const SecretLocked1 = {
  _0: 0,
  _1: 1,
} as const;
export type SecretLocked1 = (typeof SecretLocked1)[keyof typeof SecretLocked1] | (number & {});

export const secretLocked1Schema: EnumSchema<SecretLocked1> = s.enumOf<SecretLocked1>(SecretLocked1);
