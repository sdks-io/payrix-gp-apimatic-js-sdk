import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether new Logins created by member Logins of this Team will be added to this team or not.
 * Default is 0 (enabled).
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `0` - **Disabled**
 *
 *   - `1` - **Enabled**
 *
 * </details>
 */
export const TeamsAutoCascadeDisabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type TeamsAutoCascadeDisabled1 =
  | (typeof TeamsAutoCascadeDisabled1)[keyof typeof TeamsAutoCascadeDisabled1]
  | (number & {});

export const teamsAutoCascadeDisabled1Schema: EnumSchema<TeamsAutoCascadeDisabled1> =
  s.enumOf<TeamsAutoCascadeDisabled1>(TeamsAutoCascadeDisabled1);
