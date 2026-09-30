import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not this user should have access to portal functionality.
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `0` - **No access to the portal**
 *
 *   - `1` - **Has access to the portal**
 *
 * </details>
 */
export const LoginsPortalAccess1 = {
  _0: 0,
  _1: 1,
} as const;
export type LoginsPortalAccess1 =
  | (typeof LoginsPortalAccess1)[keyof typeof LoginsPortalAccess1]
  | (number & {});

export const loginsPortalAccess1Schema: EnumSchema<LoginsPortalAccess1> =
  s.enumOf<LoginsPortalAccess1>(LoginsPortalAccess1);
