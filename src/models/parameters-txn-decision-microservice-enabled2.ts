import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether we will run verifications with decision microservice or old API decision service for
 * transactions.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersTxnDecisionMicroserviceEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersTxnDecisionMicroserviceEnabled2 =
  | (typeof ParametersTxnDecisionMicroserviceEnabled2)[keyof typeof ParametersTxnDecisionMicroserviceEnabled2]
  | (number & {});

export const parametersTxnDecisionMicroserviceEnabled2Schema: EnumSchema<ParametersTxnDecisionMicroserviceEnabled2> =
  s.enumOf<ParametersTxnDecisionMicroserviceEnabled2>(ParametersTxnDecisionMicroserviceEnabled2);
