import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result from the transaction risk analysis */
export const ExemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResult = {
  ApplyExemption: "APPLY_EXEMPTION",
  Continue: "CONTINUE",
  ForceSecure: "FORCE_SECURE",
  Block: "BLOCK",
} as const;
export type ExemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResult =
  | (typeof ExemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResult)[keyof typeof ExemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResult]
  | (string & {});

export const exemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResultSchema: EnumSchema<ExemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResult> =
  s.enumOf<ExemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResult>(
    ExemptionOptimizationResultAuthenticationsThreeDsExemptionOptimizationResult,
  );
