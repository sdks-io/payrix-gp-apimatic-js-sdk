import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org (group) that OrgsVasNetworkPaymentManager is associated to. */
export type OrgsVasRevenueBoostsModelOrg = string | OrgsResponse;

export const orgsVasRevenueBoostsModelOrgSchema: Schema<OrgsVasRevenueBoostsModelOrg> =
  s.of<OrgsVasRevenueBoostsModelOrg>(s.union([s.string(), s.lazy(() => orgsResponseSchema)]));
