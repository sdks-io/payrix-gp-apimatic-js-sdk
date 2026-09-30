import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { divisionsPostRequestSchema, type DivisionsPostRequest } from "./divisions-post-request.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "./entities-post-request.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type VendorsPostRequest = {
  entity: EntitiesPostRequest;
  division?: DivisionsPostRequest;
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
  inactive: Inactive1;
  frozen: Frozen1;
};

export const vendorsPostRequestSchema: Schema<VendorsPostRequest> = s.object<VendorsPostRequest>({
  entity: entitiesPostRequestSchema,
  division: s.optional(s.lazy(() => divisionsPostRequestSchema)),
  onboardingContactEmails: s.optional(s.string()),
  riskContactEmails: s.optional(s.string()),
  inactive: inactive1Schema,
  frozen: frozen1Schema,
});
