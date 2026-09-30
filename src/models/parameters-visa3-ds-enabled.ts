import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersVisa3DsEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVisa3DsEnabled =
  | (typeof ParametersVisa3DsEnabled)[keyof typeof ParametersVisa3DsEnabled]
  | (number & {});

export const parametersVisa3DsEnabledSchema: EnumSchema<ParametersVisa3DsEnabled> =
  s.enumOf<ParametersVisa3DsEnabled>(ParametersVisa3DsEnabled);
