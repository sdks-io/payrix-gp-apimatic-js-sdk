import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersAmexEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersAmexEnabled =
  | (typeof ParametersAmexEnabled)[keyof typeof ParametersAmexEnabled]
  | (number & {});

export const parametersAmexEnabledSchema: EnumSchema<ParametersAmexEnabled> =
  s.enumOf<ParametersAmexEnabled>(ParametersAmexEnabled);
