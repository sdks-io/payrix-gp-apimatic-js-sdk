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
export const ApikeysToken1 = {
  _0: 0,
  _1: 1,
} as const;
export type ApikeysToken1 = (typeof ApikeysToken1)[keyof typeof ApikeysToken1] | (number & {});

export const apikeysToken1Schema: EnumSchema<ApikeysToken1> = s.enumOf<ApikeysToken1>(ApikeysToken1);
