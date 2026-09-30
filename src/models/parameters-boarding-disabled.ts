import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersBoardingDisabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersBoardingDisabled =
  | (typeof ParametersBoardingDisabled)[keyof typeof ParametersBoardingDisabled]
  | (number & {});

export const parametersBoardingDisabledSchema: EnumSchema<ParametersBoardingDisabled> =
  s.enumOf<ParametersBoardingDisabled>(ParametersBoardingDisabled);
