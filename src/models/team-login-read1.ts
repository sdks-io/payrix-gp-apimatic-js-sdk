import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Read rights for this Login on this Team.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **None**
 * - `1` - **Allow**
 *
 * </details>
 */
export const TeamLoginRead1 = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginRead1 = (typeof TeamLoginRead1)[keyof typeof TeamLoginRead1] | (number & {});

export const teamLoginRead1Schema: EnumSchema<TeamLoginRead1> = s.enumOf<TeamLoginRead1>(TeamLoginRead1);
