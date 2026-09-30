import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not this user should have multi factor authentication (MFA) feature.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const LoginsMfaEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type LoginsMfaEnabled1 = (typeof LoginsMfaEnabled1)[keyof typeof LoginsMfaEnabled1] | (number & {});

export const loginsMfaEnabled1Schema: EnumSchema<LoginsMfaEnabled1> =
  s.enumOf<LoginsMfaEnabled1>(LoginsMfaEnabled1);
