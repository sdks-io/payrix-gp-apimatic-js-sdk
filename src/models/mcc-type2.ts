import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type. Indicates if the Mcc is blacklisted/whitelisted.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `blacklist` - **Indicates if the Mcc is blacklisted.**
 * - `whitelist` - **Indicates if the Mcc is whitelisted.**
 *
 * </details>
 */
export const MccType2 = {
  Blacklist: "blacklist",
  Whitelist: "whitelist",
} as const;
export type MccType2 = (typeof MccType2)[keyof typeof MccType2] | (string & {});

export const mccType2Schema: EnumSchema<MccType2> = s.enumOf<MccType2>(MccType2);
