import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { verificationRefAction2Schema, type VerificationRefAction2 } from "./verification-ref-action2.js";
import { verificationRiskLevel2Schema, type VerificationRiskLevel2 } from "./verification-risk-level2.js";

export type VerificationRefsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  /** The Login that owns this resource. */
  login?: string;
  /** The identifier of the Entity that was verified. */
  entity?: string;
  /** The ID of the transaction. */
  txn?: string;
  /**
   * The concept of change request is to get a second level authorization before actioning the
   * result of a verification/policy run.
   */
  changeRequest?: string;
  /** This is the reference from the integration response. */
  ref?: string;
  riskLevel?: VerificationRiskLevel2;
  /** This is the stage where the decisions or policy run is been triggered. */
  stage?: string;
  /**
   * This is the name of the policy that is ran in this stage as returned from the integratio n
   * response.
   */
  policyName?: string;
  action?: VerificationRefAction2;
  /** This is the ID of the policy as returned from the integration response. */
  policyUuid?: string;
};

export const verificationRefsResponseSchema: Schema<VerificationRefsResponse> =
  s.object<VerificationRefsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    login: s.optional(s.string()),
    entity: s.optional(s.string()),
    txn: s.optional(s.string()),
    changeRequest: s.optional(s.string()),
    ref: s.optional(s.string()),
    riskLevel: s.optional(s.lazy(() => verificationRiskLevel2Schema)),
    stage: s.optional(s.string()),
    policyName: s.optional(s.string()),
    action: s.optional(s.lazy(() => verificationRefAction2Schema)),
    policyUuid: s.optional(s.string()),
  });
