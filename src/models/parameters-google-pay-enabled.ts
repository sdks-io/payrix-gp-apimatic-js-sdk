import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersGooglePayEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersGooglePayEnabled =
  | (typeof ParametersGooglePayEnabled)[keyof typeof ParametersGooglePayEnabled]
  | (number & {});

export const parametersGooglePayEnabledSchema: EnumSchema<ParametersGooglePayEnabled> =
  s.enumOf<ParametersGooglePayEnabled>(ParametersGooglePayEnabled);
