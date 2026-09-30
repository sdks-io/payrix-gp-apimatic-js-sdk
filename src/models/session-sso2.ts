import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not the Session is created using SSO. <details> <summary>Valid Values</summary>
 *   - `0` - **Session not created with SSO.**
 *   - `1` - **Session created with SSO.** </details>
 */
export const SessionSso2 = {
  _0: 0,
  _1: 1,
} as const;
export type SessionSso2 = (typeof SessionSso2)[keyof typeof SessionSso2] | (number & {});

export const sessionSso2Schema: EnumSchema<SessionSso2> = s.enumOf<SessionSso2>(SessionSso2);
