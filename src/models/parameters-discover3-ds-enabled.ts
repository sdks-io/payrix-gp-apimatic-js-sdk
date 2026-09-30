import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersDiscover3DsEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDiscover3DsEnabled =
  | (typeof ParametersDiscover3DsEnabled)[keyof typeof ParametersDiscover3DsEnabled]
  | (number & {});

export const parametersDiscover3DsEnabledSchema: EnumSchema<ParametersDiscover3DsEnabled> =
  s.enumOf<ParametersDiscover3DsEnabled>(ParametersDiscover3DsEnabled);
