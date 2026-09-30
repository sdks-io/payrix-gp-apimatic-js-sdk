import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not an AuthToken is required as part of the authentication when this Apikey is used.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **The authToken mechanism is disabled.**
 * - `1` - **The authToken mechanism is required for 'POST' and 'DELETE' requests.**
 *
 * </details>
 */
export const SessionToken1 = {
  _0: 0,
  _1: 1,
} as const;
export type SessionToken1 = (typeof SessionToken1)[keyof typeof SessionToken1] | (number & {});

export const sessionToken1Schema: EnumSchema<SessionToken1> = s.enumOf<SessionToken1>(SessionToken1);
