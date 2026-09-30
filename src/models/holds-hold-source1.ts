import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Field created to know the reason for why a hold was created.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `DS_MODEL_POLICY_RUN` - **DS_MODEL_POLICY_RUN**
 * - `API_DECISION` - **API_DECISION**
 * - `POLICY_RUN` - **POLICY_RUN**
 * - `RISK_ALERT` - **RISK_ALERT**
 * - `MANUAL` - **MANUAL**
 * - `ERROR` - **ERROR**
 *
 * </details>
 */
export const HoldsHoldSource1 = {
  DsModelPolicyRun: "DS_MODEL_POLICY_RUN",
  ApiDecision: "API_DECISION",
  PolicyRun: "POLICY_RUN",
  RiskAlert: "RISK_ALERT",
  Manual: "MANUAL",
  Error: "ERROR",
} as const;
export type HoldsHoldSource1 = (typeof HoldsHoldSource1)[keyof typeof HoldsHoldSource1] | (string & {});

export const holdsHoldSource1Schema: EnumSchema<HoldsHoldSource1> =
  s.enumOf<HoldsHoldSource1>(HoldsHoldSource1);
