import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of this IP List.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Blacklisted IP address range.**
 * - `1` - **Whitelisted IP address range.**
 *
 * </details>
 */
export const IplistType1 = {
  _0: 0,
  _1: 1,
} as const;
export type IplistType1 = (typeof IplistType1)[keyof typeof IplistType1] | (number & {});

export const iplistType1Schema: EnumSchema<IplistType1> = s.enumOf<IplistType1>(IplistType1);
