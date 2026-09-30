import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersLoginAsEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersLoginAsEnabled =
  | (typeof ParametersLoginAsEnabled)[keyof typeof ParametersLoginAsEnabled]
  | (number & {});

export const parametersLoginAsEnabledSchema: EnumSchema<ParametersLoginAsEnabled> =
  s.enumOf<ParametersLoginAsEnabled>(ParametersLoginAsEnabled);
