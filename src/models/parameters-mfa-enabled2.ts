import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Will dictate whether a login will have MFA turned on or not by default.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersMfaEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersMfaEnabled2 =
  | (typeof ParametersMfaEnabled2)[keyof typeof ParametersMfaEnabled2]
  | (number & {});

export const parametersMfaEnabled2Schema: EnumSchema<ParametersMfaEnabled2> =
  s.enumOf<ParametersMfaEnabled2>(ParametersMfaEnabled2);
