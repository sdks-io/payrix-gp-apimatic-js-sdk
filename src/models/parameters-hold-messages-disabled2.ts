import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether we will disable creating messages for holds.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersHoldMessagesDisabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersHoldMessagesDisabled2 =
  | (typeof ParametersHoldMessagesDisabled2)[keyof typeof ParametersHoldMessagesDisabled2]
  | (number & {});

export const parametersHoldMessagesDisabled2Schema: EnumSchema<ParametersHoldMessagesDisabled2> =
  s.enumOf<ParametersHoldMessagesDisabled2>(ParametersHoldMessagesDisabled2);
