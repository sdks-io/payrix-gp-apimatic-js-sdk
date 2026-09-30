import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Delete rights for this Login on this Team.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **None**
 * - `1` - **Allow**
 *
 * </details>
 */
export const TeamLoginDelete1 = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginDelete1 = (typeof TeamLoginDelete1)[keyof typeof TeamLoginDelete1] | (number & {});

export const teamLoginDelete1Schema: EnumSchema<TeamLoginDelete1> =
  s.enumOf<TeamLoginDelete1>(TeamLoginDelete1);
