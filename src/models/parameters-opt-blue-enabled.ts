import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersOptBlueEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersOptBlueEnabled =
  | (typeof ParametersOptBlueEnabled)[keyof typeof ParametersOptBlueEnabled]
  | (number & {});

export const parametersOptBlueEnabledSchema: EnumSchema<ParametersOptBlueEnabled> =
  s.enumOf<ParametersOptBlueEnabled>(ParametersOptBlueEnabled);
