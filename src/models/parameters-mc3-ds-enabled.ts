import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersMc3DsEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersMc3DsEnabled =
  | (typeof ParametersMc3DsEnabled)[keyof typeof ParametersMc3DsEnabled]
  | (number & {});

export const parametersMc3DsEnabledSchema: EnumSchema<ParametersMc3DsEnabled> =
  s.enumOf<ParametersMc3DsEnabled>(ParametersMc3DsEnabled);
