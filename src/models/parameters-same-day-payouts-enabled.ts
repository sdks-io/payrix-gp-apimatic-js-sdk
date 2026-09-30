import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersSameDayPayoutsEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersSameDayPayoutsEnabled =
  | (typeof ParametersSameDayPayoutsEnabled)[keyof typeof ParametersSameDayPayoutsEnabled]
  | (number & {});

export const parametersSameDayPayoutsEnabledSchema: EnumSchema<ParametersSameDayPayoutsEnabled> =
  s.enumOf<ParametersSameDayPayoutsEnabled>(ParametersSameDayPayoutsEnabled);
