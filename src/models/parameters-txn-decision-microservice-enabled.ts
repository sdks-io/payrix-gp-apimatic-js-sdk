import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersTxnDecisionMicroserviceEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersTxnDecisionMicroserviceEnabled =
  | (typeof ParametersTxnDecisionMicroserviceEnabled)[keyof typeof ParametersTxnDecisionMicroserviceEnabled]
  | (number & {});

export const parametersTxnDecisionMicroserviceEnabledSchema: EnumSchema<ParametersTxnDecisionMicroserviceEnabled> =
  s.enumOf<ParametersTxnDecisionMicroserviceEnabled>(ParametersTxnDecisionMicroserviceEnabled);
