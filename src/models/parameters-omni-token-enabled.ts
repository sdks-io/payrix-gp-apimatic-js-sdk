import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersOmniTokenEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersOmniTokenEnabled =
  | (typeof ParametersOmniTokenEnabled)[keyof typeof ParametersOmniTokenEnabled]
  | (number & {});

export const parametersOmniTokenEnabledSchema: EnumSchema<ParametersOmniTokenEnabled> =
  s.enumOf<ParametersOmniTokenEnabled>(ParametersOmniTokenEnabled);
