import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersVisaInstantPayoutsEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersVisaInstantPayoutsEnabled =
  | (typeof ParametersVisaInstantPayoutsEnabled)[keyof typeof ParametersVisaInstantPayoutsEnabled]
  | (number & {});

export const parametersVisaInstantPayoutsEnabledSchema: EnumSchema<ParametersVisaInstantPayoutsEnabled> =
  s.enumOf<ParametersVisaInstantPayoutsEnabled>(ParametersVisaInstantPayoutsEnabled);
