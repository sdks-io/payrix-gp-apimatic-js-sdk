import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An integer-boolean indicating whether or not the cascading functionality should extend to the
 * owner of this team.
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `0` - **OFF**
 *
 *   - `1` - **ON**
 *
 * </details>
 */
export const TeamsAutoCascadeOwner1 = {
  _0: 0,
  _1: 1,
} as const;
export type TeamsAutoCascadeOwner1 =
  | (typeof TeamsAutoCascadeOwner1)[keyof typeof TeamsAutoCascadeOwner1]
  | (number & {});

export const teamsAutoCascadeOwner1Schema: EnumSchema<TeamsAutoCascadeOwner1> =
  s.enumOf<TeamsAutoCascadeOwner1>(TeamsAutoCascadeOwner1);
