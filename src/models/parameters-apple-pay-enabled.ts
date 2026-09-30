import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersApplePayEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersApplePayEnabled =
  | (typeof ParametersApplePayEnabled)[keyof typeof ParametersApplePayEnabled]
  | (number & {});

export const parametersApplePayEnabledSchema: EnumSchema<ParametersApplePayEnabled> =
  s.enumOf<ParametersApplePayEnabled>(ParametersApplePayEnabled);
