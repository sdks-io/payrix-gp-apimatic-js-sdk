import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersSurchargeEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersSurchargeEnabled =
  | (typeof ParametersSurchargeEnabled)[keyof typeof ParametersSurchargeEnabled]
  | (number & {});

export const parametersSurchargeEnabledSchema: EnumSchema<ParametersSurchargeEnabled> =
  s.enumOf<ParametersSurchargeEnabled>(ParametersSurchargeEnabled);
