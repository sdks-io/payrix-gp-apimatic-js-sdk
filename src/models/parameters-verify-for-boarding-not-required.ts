import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersVerifyForBoardingNotRequired = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVerifyForBoardingNotRequired =
  | (typeof ParametersVerifyForBoardingNotRequired)[keyof typeof ParametersVerifyForBoardingNotRequired]
  | (number & {});

export const parametersVerifyForBoardingNotRequiredSchema: EnumSchema<ParametersVerifyForBoardingNotRequired> =
  s.enumOf<ParametersVerifyForBoardingNotRequired>(ParametersVerifyForBoardingNotRequired);
