import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersECheckEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersECheckEnabled =
  | (typeof ParametersECheckEnabled)[keyof typeof ParametersECheckEnabled]
  | (number & {});

export const parametersECheckEnabledSchema: EnumSchema<ParametersECheckEnabled> =
  s.enumOf<ParametersECheckEnabled>(ParametersECheckEnabled);
