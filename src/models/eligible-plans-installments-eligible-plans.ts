import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This is used to specify the number of plans returned.
 *   * `LIMITED`- Returns two plans.
 *   * `FULL` - Returns all available plans
 */
export const EligiblePlansInstallmentsEligiblePlans = {
  Limited: "LIMITED",
  Full: "FULL",
} as const;
export type EligiblePlansInstallmentsEligiblePlans =
  | (typeof EligiblePlansInstallmentsEligiblePlans)[keyof typeof EligiblePlansInstallmentsEligiblePlans]
  | (string & {});

export const eligiblePlansInstallmentsEligiblePlansSchema: EnumSchema<EligiblePlansInstallmentsEligiblePlans> =
  s.enumOf<EligiblePlansInstallmentsEligiblePlans>(EligiblePlansInstallmentsEligiblePlans);
