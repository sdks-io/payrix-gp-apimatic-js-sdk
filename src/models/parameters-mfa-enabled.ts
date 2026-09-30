import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersMfaEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersMfaEnabled =
  | (typeof ParametersMfaEnabled)[keyof typeof ParametersMfaEnabled]
  | (number & {});

export const parametersMfaEnabledSchema: EnumSchema<ParametersMfaEnabled> =
  s.enumOf<ParametersMfaEnabled>(ParametersMfaEnabled);
