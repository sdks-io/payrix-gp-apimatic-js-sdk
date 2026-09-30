import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersAutoTaxExemptEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersAutoTaxExemptEnabled =
  | (typeof ParametersAutoTaxExemptEnabled)[keyof typeof ParametersAutoTaxExemptEnabled]
  | (number & {});

export const parametersAutoTaxExemptEnabledSchema: EnumSchema<ParametersAutoTaxExemptEnabled> =
  s.enumOf<ParametersAutoTaxExemptEnabled>(ParametersAutoTaxExemptEnabled);
