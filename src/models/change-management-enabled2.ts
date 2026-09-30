import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether change management is enabled.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ChangeManagementEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ChangeManagementEnabled2 =
  | (typeof ChangeManagementEnabled2)[keyof typeof ChangeManagementEnabled2]
  | (number & {});

export const changeManagementEnabled2Schema: EnumSchema<ChangeManagementEnabled2> =
  s.enumOf<ChangeManagementEnabled2>(ChangeManagementEnabled2);
