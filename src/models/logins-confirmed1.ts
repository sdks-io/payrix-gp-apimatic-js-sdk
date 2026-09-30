import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the email associated with this Login was confirmed. This field is stored as an integer
 * and will be set to '1' when the email is confirmed.
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `0` - **Not confirmed.**
 *
 *   - `1` - **Confirmed.**
 *
 * </details>
 */
export const LoginsConfirmed1 = {
  _0: 0,
  _1: 1,
} as const;
export type LoginsConfirmed1 = (typeof LoginsConfirmed1)[keyof typeof LoginsConfirmed1] | (number & {});

export const loginsConfirmed1Schema: EnumSchema<LoginsConfirmed1> =
  s.enumOf<LoginsConfirmed1>(LoginsConfirmed1);
