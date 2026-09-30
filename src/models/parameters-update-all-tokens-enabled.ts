import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersUpdateAllTokensEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersUpdateAllTokensEnabled =
  | (typeof ParametersUpdateAllTokensEnabled)[keyof typeof ParametersUpdateAllTokensEnabled]
  | (number & {});

export const parametersUpdateAllTokensEnabledSchema: EnumSchema<ParametersUpdateAllTokensEnabled> =
  s.enumOf<ParametersUpdateAllTokensEnabled>(ParametersUpdateAllTokensEnabled);
