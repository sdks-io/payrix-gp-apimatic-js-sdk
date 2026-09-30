import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersDiscoverEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDiscoverEnabled =
  | (typeof ParametersDiscoverEnabled)[keyof typeof ParametersDiscoverEnabled]
  | (number & {});

export const parametersDiscoverEnabledSchema: EnumSchema<ParametersDiscoverEnabled> =
  s.enumOf<ParametersDiscoverEnabled>(ParametersDiscoverEnabled);
