import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this IP List contains IPv4 addresses (for example, 198.51.100.113) or IPv6 addresses (for
 * example, 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
 *
 * You can only use one type in each IP List resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `4` - **IPv4 addresses.** (Example: 198.51.100.113)
 * - `6` - **IPv6 addresses.** (Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334)
 *
 * </details>
 */
export const IplistsVersion1 = {
  _4: 4,
  _6: 6,
} as const;
export type IplistsVersion1 = (typeof IplistsVersion1)[keyof typeof IplistsVersion1] | (number & {});

export const iplistsVersion1Schema: EnumSchema<IplistsVersion1> = s.enumOf<IplistsVersion1>(IplistsVersion1);
