import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether we will run verifications with decision microservice or old API decision service.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersDecisionMicroserviceEnabled2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDecisionMicroserviceEnabled2 =
  | (typeof ParametersDecisionMicroserviceEnabled2)[keyof typeof ParametersDecisionMicroserviceEnabled2]
  | (number & {});

export const parametersDecisionMicroserviceEnabled2Schema: EnumSchema<ParametersDecisionMicroserviceEnabled2> =
  s.enumOf<ParametersDecisionMicroserviceEnabled2>(ParametersDecisionMicroserviceEnabled2);
