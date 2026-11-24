import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { feesSchema, type Fees } from "./fees.js";
import {
  modeInstallmentsTermsModeSchema,
  type ModeInstallmentsTermsMode,
} from "./mode-installments-terms-mode.js";
import { termsAndConditionSchema, type TermsAndCondition } from "./terms-and-condition.js";
import {
  timeUnitInstallmentsTermsTimeUnitSchema,
  type TimeUnitInstallmentsTermsTimeUnit,
} from "./time-unit-installments-terms-time-unit.js";

export type Terms1 = {
  /** Name of the Installment Plan */
  name?: string;
  /** A unique identifier used to identify the installment plan. */
  reference?: string;
  /** This is the type of Installment Plan. */
  mode?: ModeInstallmentsTermsMode;
  /**
   * Indicates the total number of payments to be made over the course of the installment payment
   * plan.
   */
  count?: number;
  /**
   * The grace period before the first payment. 00 indicates no grace period. This field is
   * available to Mexico merchants only.
   */
  gracePeriodCount?: string;
  /** The currency of the fees attached to the installment plan */
  currency?: string;
  /** This is the frequency of the payments in the installment plan */
  timeUnit?: TimeUnitInstallmentsTermsTimeUnit;
  termsAndConditions?: TermsAndCondition[];
  /** Annual percentage rate (APR) as configured by the Issuer during plan creation. */
  costPercentage?: string;
  /** This is the total cost of the installment plan inclusive of fees */
  totalPlanCost?: string;
  /** This is the amount to be paid at each installment */
  planAmount?: string;
  fees?: Fees;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const terms1Schema: Schema<Terms1> = s.object<Terms1>(
  {
    name: s.optional(s.string()),
    reference: s.optional(s.string()),
    mode: s.optional(s.lazy(() => modeInstallmentsTermsModeSchema)),
    count: s.optional(s.int()),
    gracePeriodCount: s.optional(s.string()),
    currency: s.optional(s.string()),
    timeUnit: s.optional(s.lazy(() => timeUnitInstallmentsTermsTimeUnitSchema)),
    termsAndConditions: s.optional(s.array(s.lazy(() => termsAndConditionSchema))),
    costPercentage: s.optional(s.string()),
    totalPlanCost: s.optional(s.string()),
    planAmount: s.optional(s.string()),
    fees: s.optional(s.lazy(() => feesSchema)),
    _keysMap: {
      gracePeriodCount: "grace_period_count",
      timeUnit: "time_unit",
      termsAndConditions: "terms_and_conditions",
      costPercentage: "cost_percentage",
      totalPlanCost: "total_plan_cost",
      planAmount: "plan_amount",
    },
  },
  { additionalProperties: s.json() },
);
