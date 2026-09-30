import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersVerifyDisabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVerifyDisabled =
  | (typeof ParametersVerifyDisabled)[keyof typeof ParametersVerifyDisabled]
  | (number & {});

export const parametersVerifyDisabledSchema: EnumSchema<ParametersVerifyDisabled> =
  s.enumOf<ParametersVerifyDisabled>(ParametersVerifyDisabled);
