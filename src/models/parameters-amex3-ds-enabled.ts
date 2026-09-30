import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersAmex3DsEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersAmex3DsEnabled =
  | (typeof ParametersAmex3DsEnabled)[keyof typeof ParametersAmex3DsEnabled]
  | (number & {});

export const parametersAmex3DsEnabledSchema: EnumSchema<ParametersAmex3DsEnabled> =
  s.enumOf<ParametersAmex3DsEnabled>(ParametersAmex3DsEnabled);
