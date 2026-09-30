import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org (group) that networkPaymentManager is associated with. */
export type RevenueBoostsModelOrg = string | OrgsResponse;

export const revenueBoostsModelOrgSchema: Schema<RevenueBoostsModelOrg> = s.of<RevenueBoostsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
