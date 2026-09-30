import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HoldsHoldSource = {
  DsModelPolicyRun: "DS_MODEL_POLICY_RUN",
  ApiDecision: "API_DECISION",
  PolicyRun: "POLICY_RUN",
  RiskAlert: "RISK_ALERT",
  Manual: "MANUAL",
  Error: "ERROR",
} as const;
export type HoldsHoldSource = (typeof HoldsHoldSource)[keyof typeof HoldsHoldSource] | (string & {});

export const holdsHoldSourceSchema: EnumSchema<HoldsHoldSource> = s.enumOf<HoldsHoldSource>(HoldsHoldSource);
