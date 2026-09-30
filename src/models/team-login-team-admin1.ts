import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Team administration rights for this Login on this Team.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **None**
 * - `1` - **Allow**
 *
 * </details>
 */
export const TeamLoginTeamAdmin1 = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginTeamAdmin1 =
  | (typeof TeamLoginTeamAdmin1)[keyof typeof TeamLoginTeamAdmin1]
  | (number & {});

export const teamLoginTeamAdmin1Schema: EnumSchema<TeamLoginTeamAdmin1> =
  s.enumOf<TeamLoginTeamAdmin1>(TeamLoginTeamAdmin1);
