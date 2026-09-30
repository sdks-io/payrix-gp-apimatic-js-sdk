import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { division3Schema, type Division3 } from "./division3.js";
import { entity27Schema, type Entity27 } from "./entity27.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type Vendor = {
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
  entity?: Entity27;
  division?: Division3;
  /** Deprecated. */
  dealId?: string;
  /**
   * This holds the different emails the partners will want to be reached for onboarding related
   * queries/concerns, this is a way of allowing the risk team to manage contacts more efficiently.
   */
  onboardingContactEmails?: string;
  /**
   * This holds the different emails the partners will want to be reached for risk related
   * queries/concerns, this is a way of allowing the risk team to manage contacts more efficiently.
   */
  riskContactEmails?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const vendorSchema: Schema<Vendor> = s.object<Vendor>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity27Schema)),
  division: s.optional(s.lazy(() => division3Schema)),
  dealId: s.optional(s.string()),
  onboardingContactEmails: s.optional(s.string()),
  riskContactEmails: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
