import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersDecisionMicroserviceEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDecisionMicroserviceEnabled =
  | (typeof ParametersDecisionMicroserviceEnabled)[keyof typeof ParametersDecisionMicroserviceEnabled]
  | (number & {});

export const parametersDecisionMicroserviceEnabledSchema: EnumSchema<ParametersDecisionMicroserviceEnabled> =
  s.enumOf<ParametersDecisionMicroserviceEnabled>(ParametersDecisionMicroserviceEnabled);
