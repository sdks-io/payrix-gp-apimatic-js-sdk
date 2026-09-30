import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org that this Billing Modifier applies to. */
export type BillingModifiersModelOrg = string | OrgsResponse;

export const billingModifiersModelOrgSchema: Schema<BillingModifiersModelOrg> =
  s.of<BillingModifiersModelOrg>(s.union([s.string(), s.lazy(() => orgsResponseSchema)]));
