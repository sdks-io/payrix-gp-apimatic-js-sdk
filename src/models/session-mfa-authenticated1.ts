import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not the MFA is enabled.. <details> <summary>Valid Values</summary>
 *   - `0` - **MFA is disabled.**
 *   - `1` - **MFA is enabled.** </details>
 */
export const SessionMfaAuthenticated1 = {
  _0: 0,
  _1: 1,
} as const;
export type SessionMfaAuthenticated1 =
  | (typeof SessionMfaAuthenticated1)[keyof typeof SessionMfaAuthenticated1]
  | (number & {});

export const sessionMfaAuthenticated1Schema: EnumSchema<SessionMfaAuthenticated1> =
  s.enumOf<SessionMfaAuthenticated1>(SessionMfaAuthenticated1);
