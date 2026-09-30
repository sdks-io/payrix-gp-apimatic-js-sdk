import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this Session should have access to only public resources. All other resources are
 * private. <details> <summary>Valid Values</summary>
 *  - `0` - **Session can also access private resources.**
 *  - `1` - **Session can only access public resources.** </details>
 */
export const SessionPublic1 = {
  _0: 0,
  _1: 1,
} as const;
export type SessionPublic1 = (typeof SessionPublic1)[keyof typeof SessionPublic1] | (number & {});

export const sessionPublic1Schema: EnumSchema<SessionPublic1> = s.enumOf<SessionPublic1>(SessionPublic1);
