import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to check for and use existing Verifications and Verification Results for this decision.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const DecisionsUseCache1 = {
  _0: 0,
  _1: 1,
} as const;
export type DecisionsUseCache1 = (typeof DecisionsUseCache1)[keyof typeof DecisionsUseCache1] | (number & {});

export const decisionsUseCache1Schema: EnumSchema<DecisionsUseCache1> =
  s.enumOf<DecisionsUseCache1>(DecisionsUseCache1);
