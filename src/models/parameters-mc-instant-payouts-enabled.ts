import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersMcInstantPayoutsEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersMcInstantPayoutsEnabled =
  | (typeof ParametersMcInstantPayoutsEnabled)[keyof typeof ParametersMcInstantPayoutsEnabled]
  | (number & {});

export const parametersMcInstantPayoutsEnabledSchema: EnumSchema<ParametersMcInstantPayoutsEnabled> =
  s.enumOf<ParametersMcInstantPayoutsEnabled>(ParametersMcInstantPayoutsEnabled);
