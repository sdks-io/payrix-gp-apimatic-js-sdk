import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type FacilitatorsResponse = {
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
  /** The identifier of the Entity that this Facilitators resource belongs to. */
  entity?: string;
  /**
   * The billing descriptor prefix for this Facilitator. This string appears at the start of the
   * description for transactions on credit card statements when any sub-Merchant of this
   * Facilitator charges a card.
   */
  prefix?: string;
  /**
   * The identifier of the Partition that this Facilitator is associated with. You can only
   * associate one Facilitator to each Partition.
   */
  partition?: string;
  /** The name of the credit card processor. Optional field used by transaction fraud checking. */
  gatewayName?: string;
  /** Latest merchant terms and conditions version for this facilitator. */
  tcMerchant?: string;
  /** Latest vendor terms and conditions version for this facilitator. */
  tcVendor?: string;
  /** Email for the facilitator to recieve a notification of a chargeback */
  chargebackNotificationEmail?: string;
  /** List of risk contact emails. \nThese emails are used for risk management communications. */
  riskContactEmails?: string;
  /**
   * List of onboarding contact emails. \nThese emails are used for initial contact and setup
   * processes.
   */
  onboardingContactEmails?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const facilitatorsResponseSchema: Schema<FacilitatorsResponse> = s.object<FacilitatorsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.string()),
  prefix: s.optional(s.string()),
  partition: s.optional(s.string()),
  gatewayName: s.optional(s.string()),
  tcMerchant: s.optional(s.string()),
  tcVendor: s.optional(s.string()),
  chargebackNotificationEmail: s.optional(s.string()),
  riskContactEmails: s.optional(s.string()),
  onboardingContactEmails: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
