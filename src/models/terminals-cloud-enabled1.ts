import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not the terminal has cloud services enabled.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Cloud Services Disabled**
 * - `1` - **Cloud Services Enabled**
 *
 * </details>
 */
export const TerminalsCloudEnabled1 = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalsCloudEnabled1 =
  | (typeof TerminalsCloudEnabled1)[keyof typeof TerminalsCloudEnabled1]
  | (number & {});

export const terminalsCloudEnabled1Schema: EnumSchema<TerminalsCloudEnabled1> =
  s.enumOf<TerminalsCloudEnabled1>(TerminalsCloudEnabled1);
