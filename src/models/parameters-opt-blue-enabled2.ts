import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether American Express OptBlue should be enabled. The default setting is `0`.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersOptBlueEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersOptBlueEnabled2 =
  | (typeof ParametersOptBlueEnabled2)[keyof typeof ParametersOptBlueEnabled2]
  | (number & {});

export const parametersOptBlueEnabled2Schema: EnumSchema<ParametersOptBlueEnabled2> =
  s.enumOf<ParametersOptBlueEnabled2>(ParametersOptBlueEnabled2);
