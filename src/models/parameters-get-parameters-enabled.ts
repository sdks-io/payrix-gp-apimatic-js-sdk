import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersGetParametersEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersGetParametersEnabled =
  | (typeof ParametersGetParametersEnabled)[keyof typeof ParametersGetParametersEnabled]
  | (number & {});

export const parametersGetParametersEnabledSchema: EnumSchema<ParametersGetParametersEnabled> =
  s.enumOf<ParametersGetParametersEnabled>(ParametersGetParametersEnabled);
