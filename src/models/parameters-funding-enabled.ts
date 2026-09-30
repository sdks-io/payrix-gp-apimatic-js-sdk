import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersFundingEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersFundingEnabled =
  | (typeof ParametersFundingEnabled)[keyof typeof ParametersFundingEnabled]
  | (number & {});

export const parametersFundingEnabledSchema: EnumSchema<ParametersFundingEnabled> =
  s.enumOf<ParametersFundingEnabled>(ParametersFundingEnabled);
