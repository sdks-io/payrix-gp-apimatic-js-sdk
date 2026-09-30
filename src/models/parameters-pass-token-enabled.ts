import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersPassTokenEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPassTokenEnabled =
  | (typeof ParametersPassTokenEnabled)[keyof typeof ParametersPassTokenEnabled]
  | (number & {});

export const parametersPassTokenEnabledSchema: EnumSchema<ParametersPassTokenEnabled> =
  s.enumOf<ParametersPassTokenEnabled>(ParametersPassTokenEnabled);
