import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the associated login can use loginAs or not.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **OFF**
 * - `1` - **ON**
 *
 * </details>
 */
export const LoginHelpersLoginAsEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type LoginHelpersLoginAsEnabled1 =
  | (typeof LoginHelpersLoginAsEnabled1)[keyof typeof LoginHelpersLoginAsEnabled1]
  | (number & {});

export const loginHelpersLoginAsEnabled1Schema: EnumSchema<LoginHelpersLoginAsEnabled1> =
  s.enumOf<LoginHelpersLoginAsEnabled1>(LoginHelpersLoginAsEnabled1);
