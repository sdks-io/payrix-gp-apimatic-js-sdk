import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersAccountUpdaterEnabled = {
  _0: 0,
  _1: 1,
  _2: 2,
} as const;
export type ParametersAccountUpdaterEnabled =
  | (typeof ParametersAccountUpdaterEnabled)[keyof typeof ParametersAccountUpdaterEnabled]
  | (number & {});

export const parametersAccountUpdaterEnabledSchema: EnumSchema<ParametersAccountUpdaterEnabled> =
  s.enumOf<ParametersAccountUpdaterEnabled>(ParametersAccountUpdaterEnabled);
