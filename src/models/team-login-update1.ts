import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Update rights for this Login on this Team.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **None**
 * - `1` - **Allow**
 *
 * </details>
 */
export const TeamLoginUpdate1 = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginUpdate1 = (typeof TeamLoginUpdate1)[keyof typeof TeamLoginUpdate1] | (number & {});

export const teamLoginUpdate1Schema: EnumSchema<TeamLoginUpdate1> =
  s.enumOf<TeamLoginUpdate1>(TeamLoginUpdate1);
