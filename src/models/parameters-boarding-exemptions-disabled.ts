import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersBoardingExemptionsDisabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersBoardingExemptionsDisabled =
  | (typeof ParametersBoardingExemptionsDisabled)[keyof typeof ParametersBoardingExemptionsDisabled]
  | (number & {});

export const parametersBoardingExemptionsDisabledSchema: EnumSchema<ParametersBoardingExemptionsDisabled> =
  s.enumOf<ParametersBoardingExemptionsDisabled>(ParametersBoardingExemptionsDisabled);
