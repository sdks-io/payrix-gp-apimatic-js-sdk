import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Create rights for this Login on this Team.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **None**
 * - `1` - **Allow**
 *
 * </details>
 */
export const TeamLoginCreate1 = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginCreate1 = (typeof TeamLoginCreate1)[keyof typeof TeamLoginCreate1] | (number & {});

export const teamLoginCreate1Schema: EnumSchema<TeamLoginCreate1> =
  s.enumOf<TeamLoginCreate1>(TeamLoginCreate1);
