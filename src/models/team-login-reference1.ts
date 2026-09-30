import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reference use rights for this Login on this Team.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **None**
 * - `1` - **Allow**
 *
 * </details>
 */
export const TeamLoginReference1 = {
  _0: 0,
  _1: 1,
} as const;
export type TeamLoginReference1 =
  | (typeof TeamLoginReference1)[keyof typeof TeamLoginReference1]
  | (number & {});

export const teamLoginReference1Schema: EnumSchema<TeamLoginReference1> =
  s.enumOf<TeamLoginReference1>(TeamLoginReference1);
