import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/**
 * The identifier of the Org that this payoutFlows resource applies to. If you set this field, then
 * the payoutFlow applies to all Entities in the Org.
 */
export type PayoutFlowsModelOrg = string | OrgsResponse;

export const payoutFlowsModelOrgSchema: Schema<PayoutFlowsModelOrg> = s.of<PayoutFlowsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
